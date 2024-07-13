import { Page, expect } from "@playwright/test";
import { AlzaInit } from "../../../pageObjects/alza/alzaInit";
import { TestItemData } from "../../../../global";

export class CrossPage {
    alza: AlzaInit

    constructor(page: Page) {
        this.alza = new AlzaInit(page);
    }

    async moveToTheCart(page: Page, itemData: TestItemData) {
        //await expect(this.alza.crossPO.itemContainerImage).toHaveAttribute("src", process.env.IMAGE_URL + "/" + itemData.imageFull)
        await expect(this.alza.crossPO.itemContainerInfoMessage).toBeVisible()
        await expect(this.alza.crossPO.itemContainerInfoMessage).toHaveText(this.alza.crossPO.testData.itemContainerInfoMessageText)
        await expect(this.alza.crossPO.backButton).toBeVisible()
        await expect(this.alza.crossPO.backButton).toHaveText(this.alza.crossPO.testData.buttonBackText)
        await expect(this.alza.crossPO.cartButton).toBeVisible()
        await expect(this.alza.crossPO.cartButton).toHaveText(this.alza.crossPO.testData.cartButtonText)
        await this.alza.crossPO.cartButton.click()
    }
}