import { Locator, Page } from "@playwright/test";

export class AlzaItemDetailPO {
    //Main
    detailPage: Locator
    itemContainer: Locator

    //title
    titleContainer: Locator
    title: Locator

    //detailTextcontainer
    detailTextContainer: Locator
    priceDetailContainer: Locator
    buyButton: Locator



    constructor(page: Page) {
        this.detailPage = page.locator('div.detail-page')
        this.itemContainer = this.detailPage.locator('#detailItem')

        //title
        this.titleContainer = this.itemContainer.locator('div.title-cnt')
        this.title = this.itemContainer.locator('#h1c')

        //detailTextContainer
        this.detailTextContainer = this.itemContainer.locator('#detailText')

        //priceContainer
        this.priceDetailContainer = this.detailTextContainer.locator('div.price-detail')
        this.buyButton = this.priceDetailContainer.locator('a.js-buy-button')
    }
}