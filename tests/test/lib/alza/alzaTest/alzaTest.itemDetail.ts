import { Page, expect } from "@playwright/test";
import { AlzaInit } from "../../../../pageObjects/alza/alzaInit";
import { AlzaTestItemData } from "../../../../../global";

export class ItemDetail {
    alza: AlzaInit

    constructor(page: Page) {
        this.alza = new AlzaInit(page);
    }

    async addViewedItemToCart(page: Page, itemData: AlzaTestItemData) {
        //await expect(this.alza.crossPO.itemContainerImage).toHaveAttribute("src", process.env.IMAGE_URL + "/" + itemData.imageFull)
        await expect(this.alza.itemDetailPO.title).toHaveText(itemData.fullName)
        //await this.alza.itemDetailPO.buyButton.click()
        await this.alza.itemDetailPO.addItemAndProceedToCart(page)
        await page.waitForURL(`**\/${this.alza.crossPO.testData.crossPageURL}\?**`)
    }
}