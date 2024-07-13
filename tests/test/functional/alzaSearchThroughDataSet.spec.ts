import { Page, test } from "@playwright/test";
import { AlzaInit, TestItemArray } from "../../pageObjects/alza/alzaInit";
import { AlzaTest } from "../lib/alzaTest";


test.describe("Run through data set", () => {
    let page: Page
    let alza: AlzaInit
    let alzaTest: AlzaTest

    test.beforeEach(async ({ page }) => {
        alza = new AlzaInit(page);
        alzaTest = new AlzaTest(page)

        await page.goto(alza.commonPO.testData.mainURL)
        await alza.commonPO.cookieRejectButton.click()
    })

    for (const item in TestItemArray) {
        test(`Search throught Data set - ${TestItemArray[item].name}`, async ({ page }) => {
            await alzaTest.searchInput.searchInputSet(page, TestItemArray[item])
        })
    }
})