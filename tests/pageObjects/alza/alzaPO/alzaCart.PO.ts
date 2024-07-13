import { Locator, Page } from "@playwright/test";
import { TestItemData } from "../../../../global";

export class AlzaCartPO {
    //Main
    mainBody: Locator
    mainPage: Locator

    //Container
    cartPage: Locator
    cartComponentBar: Locator

    //cart/basket tab
    cartItemsContainer: Locator
    cartItemsEmptyBlock: Locator
    cartItemsEmptyBlockText: Locator
    cartItemsEmptyImage: Locator

    cartItemBlock: Locator
    cartItemBlockTable: Locator
    cartItemNameAndAccesoriesContainer: Locator
    cartItemNameText: Locator

    cartToCatalog: Locator

    //footer
    cartFooter: Locator
    continueButton: Locator
    backButton: Locator

    //dialog
    dialogContainer: Locator
    dialogContainerBody: Locator
    dialogButtons: Locator
    dialogCloseButton: Locator
    dialogAddButton: Locator


    constructor(page: Page) {
        this.cartPage = page.locator('#orderpage')
        this.cartComponentBar = this.cartPage.getByTestId('#component-order1')

        //cart/basket tab
        this.cartItemsContainer = page.locator('div.basketTab')
        this.cartItemsEmptyBlock = this.cartItemsContainer.locator('#blocke')
        this.cartItemsEmptyBlockText = this.cartItemsEmptyBlock.locator('div').locator('span')
        this.cartItemsEmptyImage = this.cartItemsEmptyBlock.locator('img.emptyImage')
        this.cartItemBlock = this.cartItemsContainer.locator('#blockne')
        this.cartItemBlockTable = this.cartItemBlock.locator('table')
        this.cartItemNameAndAccesoriesContainer = page.locator('div.nameAndAccessoriesContainer')
        this.cartItemNameText = this.cartItemNameAndAccesoriesContainer.locator('a.mainItem')


        this.cartToCatalog = this.cartItemsContainer.locator('a.floor')

        //footer
        this.cartFooter = page.locator('div.sticky_footer')
        this.continueButton = this.cartFooter.locator('#blockBtnRight')
        this.backButton = this.cartFooter.locator('.arrowedLeft')

        //dialog
        this.dialogContainer = page.locator('#alzaDialog')
        this.dialogContainerBody = this.dialogContainer.locator('div.alzaDialogBody')
        this.dialogButtons = this.dialogContainerBody.locator('div.bottom-buttons')
        this.dialogCloseButton = this.dialogButtons.locator('span.close-button')
        this.dialogAddButton = this.dialogButtons.locator('.add-button')
    }

    testData = {
        emptyCartImageSrc: "Styles/full/images/bg-basket-empty.png",
        emptyCartText: "Jsem tak prázdný...",
        cartToCatalogHref: "/CatalogPage.aspx",
        cartToCatalogText: "Zobrazit katalog",
        backButtonText: "Zpět k nákupu",
        continueButtonText: "Pokračovat",
        dialogContainerBodyTitle: "Nezapomeňte na tyto důležité věci",
        dialogCloseButtonText: "Nepřidávat nic",
        dialogAddButtonText: "Přidat vybrané do košíku"
    }

    async getCartItemRow(page: Page, itemData: TestItemData) {
        const elementLocator = this.cartItemBlockTable.locator(`tr[data-code="${itemData.code}"]`)
        return elementLocator
    }

}