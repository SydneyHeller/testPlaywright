import { Page, expect, test } from "@playwright/test";
import { AlzaInit } from "../../../pageObjects/alza/alzaInit";
import { TestItemData } from "../../../../global";

export class Cart {
    alza: AlzaInit

    constructor(page: Page) {
        this.alza = new AlzaInit(page);
    }

    /**
     * Test the searchInput default state
     */
    async cartEmpty(page: Page) {
        await expect(this.alza.commonPO.cart).toHaveAttribute("title", this.alza.commonPO.testData.cartTitle)
        await expect(this.alza.commonPO.cart).toHaveAttribute("href", this.alza.commonPO.testData.cartHref)
        await this.alza.commonPO.cart.click()
        await page.waitForURL(this.alza.commonPO.testData.cartHref);
        //Check content of empty cart
        await expect(this.alza.cartPO.cartItemsEmptyImage).toBeVisible()
        await expect(this.alza.cartPO.cartItemsEmptyImage).toHaveAttribute("src", this.alza.cartPO.testData.emptyCartImageSrc)
        await expect(this.alza.cartPO.cartItemsEmptyBlockText).toHaveText(this.alza.cartPO.testData.emptyCartText)
        await expect(this.alza.cartPO.cartToCatalog).toBeVisible()
        await expect(this.alza.cartPO.cartToCatalog).toHaveAttribute("href", this.alza.cartPO.testData.cartToCatalogHref)
        await expect(this.alza.cartPO.cartToCatalog).toHaveText(this.alza.cartPO.testData.cartToCatalogText)
    }

    async cartEmptyProceedToCheckout(page: Page) {
        await this.alza.commonPO.cart.click()
        await page.waitForURL(this.alza.commonPO.testData.cartHref);
        await expect(this.alza.cartPO.cartItemsEmptyBlockText).toHaveText(this.alza.cartPO.testData.emptyCartText)
        await expect(this.alza.cartPO.backButton).toBeVisible()
        await expect(this.alza.cartPO.backButton).toHaveText(this.alza.cartPO.testData.backButtonText)
        await expect(this.alza.cartPO.continueButton).toBeHidden()
    }

    async cartFillProceedToCheckout(page: Page, itemData: TestItemData) {
        const itemRow = await this.alza.cartPO.getCartItemRow(page, itemData)

        await expect((itemRow).locator(this.alza.cartPO.cartItemNameText)).toBeVisible()
        await expect((itemRow).locator(this.alza.cartPO.cartItemNameText)).toContainText(itemData.fullName)
        await expect(this.alza.cartPO.backButton).toBeVisible()
        await expect(this.alza.cartPO.backButton).toHaveText(this.alza.cartPO.testData.backButtonText)
        await expect(this.alza.cartPO.continueButton).toBeVisible()
        await expect(this.alza.cartPO.continueButton).toHaveText(this.alza.cartPO.testData.continueButtonText)
        await this.alza.cartPO.continueButton.click({ force: true, timeout: 1000 })
        await expect(this.alza.cartPO.dialogContainerBody).toBeVisible()
        await expect(this.alza.cartPO.dialogAddButton).toBeVisible()
        await expect(this.alza.cartPO.dialogAddButton).toHaveText(this.alza.cartPO.testData.dialogAddButtonText)
        await expect(this.alza.cartPO.dialogCloseButton).toBeVisible()
        await expect(this.alza.cartPO.dialogCloseButton).toHaveText(this.alza.cartPO.testData.dialogCloseButtonText)
        await expect(this.alza.cartPO.dialogCloseButton).toBeEnabled()
        await this.alza.cartPO.dialogCloseButton.click()
        await page.waitForURL(process.env.MAIN_URL + "/" + process.env.CHECKOUT_URL)
    }
}
