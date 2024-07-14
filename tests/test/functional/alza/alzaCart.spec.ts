import { Page, test } from "@playwright/test";
import { AlzaInit } from "../../../pageObjects/alza/alzaInit";
import { AlzaTest } from "../../lib/alza/alzaTest";


test.describe("Cart and CrossPage", () => {
    let page: Page
    let alza: AlzaInit
    let alzaTest: AlzaTest

    test.beforeEach(async ({ page }) => {
        alza = new AlzaInit(page);
        alzaTest = new AlzaTest(page)

        await page.goto(alza.commonPO.testData.mainURL)
        await alza.commonPO.cookieRejectButton.click()
    })

    test("Cart - empty", async ({ page }) => {
        await alzaTest.cart.cartEmpty(page)
    })

    test("Shopping Cart -> Try to proceed to checkout - Cart is empty", async ({ page }) => {
        await alzaTest.cart.cartEmptyProceedToCheckout(page)
    })
})