
import { Locator, Page } from "@playwright/test";

export class AlzaCrossPagePO {
    //Main

    //MainContainer
    crossPage: Locator

    //ItemContainer
    purchaseContainer: Locator
    itemContainer: Locator
    itemContainerImage: Locator
    itemContainerInfo: Locator
    itemContainerInfoMessage: Locator

    buttonGroupContainer: Locator

    backButton: Locator
    cartButton: Locator



    constructor(page: Page) {
        this.crossPage = page.locator('div.cross-page')

        //ItemContainer
        this.purchaseContainer = this.crossPage.locator('div.top-info')
        this.itemContainer = this.purchaseContainer.locator('div.productInfo')
        this.itemContainerImage = this.itemContainer.locator('img');
        this.itemContainerInfo = this.itemContainer.locator('div.productInfo__texts')
        this.itemContainerInfoMessage = this.itemContainerInfo.locator('.productInfo__texts__message')

        //ButtonGroupContainer
        this.buttonGroupContainer = this.purchaseContainer.locator('div.buttonGroup')
        this.backButton = this.buttonGroupContainer.locator('#varBBackButton')
        this.cartButton = this.buttonGroupContainer.locator('#varBToBasketButton')
    }

    testData = {
        crossPageURL: process.env.CROSSPAGE_URL,
        buttonBackHref: "javascript:history.back()",
        buttonBackText: "Zpět",
        cartButtonHref: "/" + process.env.CART_URL,
        cartButtonText: "Pokračovat do košíku",
        itemContainerInfoMessageText: "Zboží bylo přidáno do košíku",
        itemContainerInfoMessageHref: "/" + process.env.CART_URL,
        imageUrlSuffix: "?width=120&height=120"
    }

}