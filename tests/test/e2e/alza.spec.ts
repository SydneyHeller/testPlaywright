import { Page, expect, test } from "@playwright/test";
import { AlzaInit, TestItemArray } from "../../pageObjects/alza/alzaInit";
import { AlzaTest } from "../lib/alzaTest";

test.describe("E2E - addItemToCart", () => {
    test.describe.configure({ mode: 'serial' })
    let page: Page
    let alza: AlzaInit
    let alzaTest: AlzaTest

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        alza = new AlzaInit(page)
        alzaTest = new AlzaTest(page)

        await page.goto(alza.commonPO.testData.mainURL)
        await alza.commonPO.cookieRejectButton.click()
    })

    test("Test 1 - Main/Start Page ", async () => {
        await expect(alza.commonPO.headerLogo).toHaveAttribute("title", alza.commonPO.testData.headerLogoTitle)
        await expect(alza.commonPO.headerLogo).toHaveAttribute("href", alza.commonPO.testData.headerLogoHref)
        await expect(alza.commonPO.headerLogoImage).toBeVisible()
        await expect(alza.commonPO.headerLogoImage).toHaveAttribute("src", alza.commonPO.testData.headerLogoImage)
        await expect(alza.commonPO.cart).toHaveAttribute("title", alza.commonPO.testData.cartTitle)
        await expect(alza.commonPO.cart).toHaveAttribute("href", alza.commonPO.testData.cartHref)
    })

    test("Search Item -> View item detail/page", async () => {
        await alzaTest.searchInput.searchInputSet(page, TestItemArray[0])
    })

    test("Add opened item to cart -> CrossPage", async () => {
        await alzaTest.itemDetail.addViewedItemToCart(page, TestItemArray[0])
    })

    test("CrossPage -> Continue to Cart", async () => {
        await alzaTest.crossPage.moveToTheCart(page, TestItemArray[0])
    })

    test("Cart -> Proceed to checkout", async () => {
        await alzaTest.cart.cartFillProceedToCheckout(page, TestItemArray[0])
    })
})