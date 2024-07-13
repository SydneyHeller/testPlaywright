import { Page, expect, test } from "@playwright/test";
import { AlzaInit, TestItemArray } from "../../pageObjects/alza/alzaInit";
import { AlzaTest } from "../lib/alzaTest";


test.describe("Main Page", () => {
    let page: Page
    let alza: AlzaInit
    let alzaTest: AlzaTest

    test.beforeEach(async ({ page }) => {
        alza = new AlzaInit(page);
        alzaTest = new AlzaTest(page)

        await page.goto(alza.commonPO.testData.mainURL)
        await alza.commonPO.cookieRejectButton.click()
    })

    test("Main/Start Page ", async ({ page }) => {
        await expect(alza.commonPO.headerLogo).toHaveAttribute("title", alza.commonPO.testData.headerLogoTitle)
        await expect(alza.commonPO.headerLogo).toHaveAttribute("href", alza.commonPO.testData.headerLogoHref)
        await expect(alza.commonPO.headerLogoImage).toBeVisible()
        await expect(alza.commonPO.headerLogoImage).toHaveAttribute("src", alza.commonPO.testData.headerLogoImage)
        await expect(alza.commonPO.cart).toHaveAttribute("title", alza.commonPO.testData.cartTitle)
        await expect(alza.commonPO.cart).toHaveAttribute("href", alza.commonPO.testData.cartHref)
    })

    test("Header - SearchInput - Default", async ({ page }) => {
        await alzaTest.searchInput.searchInputDefaultEmpty()
    })

    test("Search Item -> View item detail/page ", async ({ page }) => {
        await alzaTest.searchInput.searchInputSet(page, TestItemArray[0])
    })
})