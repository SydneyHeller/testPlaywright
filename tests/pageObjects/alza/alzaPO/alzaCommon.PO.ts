import { Locator, Page } from "@playwright/test";

export class AlzaCommonPO {
    //Main
    mainBody: Locator
    mainPage: Locator

    //Header
    header: Locator
    headerLogoImage: Locator

    //search
    searchDiv: Locator
    searchInput
    searchInputRemoveButton: Locator
    searchButton: Locator
    searchResultContainer: Locator
    searchResultPhrase: Locator
    searchResultPhraseItem: Locator
    searchResultCommodities: Locator
    searchResultCommoditiesItem: Locator

    cart: Locator


    //Content
    content: Locator
    headerLogo: Locator

    //ContentContainer
    contentContainer: Locator

    //leftMenu
    leftContainer: Locator
    leftMenu: Locator
    leftMenuItem: Locator

    //cookieContainer
    cookieContainer: Locator
    cookieRejectButton: Locator

    constructor(page: Page) {
        this.mainBody = page.locator('#body2')
        this.mainPage = this.mainBody.locator('#page')

        //header
        this.header = this.mainPage.getByTestId('component-header')
        this.headerLogo = this.header.getByTestId('headerLogo')
        this.headerLogoImage = this.headerLogo.locator('img')

        //search
        this.searchDiv = this.header.locator('div[data-testid="searchInput"]')
        this.searchInput = this.header.locator('input[data-testid="searchInput"]')
        this.searchInputRemoveButton = this.searchDiv.getByTestId('button-removeText')
        this.searchButton = this.header.getByTestId('button-search')
        this.searchResultContainer = this.header.getByTestId('searchResultsContainer')
        this.searchResultPhrase = this.searchResultContainer.getByTestId('section-phrases')
        this.searchResultPhraseItem = this.searchResultPhrase.getByTestId('suggestion-item')
        this.searchResultCommodities = this.searchResultContainer.getByTestId('section-commodities')
        this.searchResultCommoditiesItem = this.searchResultCommodities.getByTestId('suggestion-item')

        //cart 
        this.cart = this.header.getByTestId('headerBasketIcon')

        //content
        this.content = this.mainPage.locator('content0c')
        this.contentContainer = this.content.locator('#content2')

        //leftContainer
        this.leftContainer = this.content.locator('#left')
        this.leftMenu = this.leftContainer.locator('ul.fmenu')
        this.leftMenuItem = this.leftMenu.locator('li.leftMenuItem')

        //cookieContainer
        this.cookieContainer = page.locator('div.cookies-info')
        this.cookieRejectButton = this.cookieContainer.locator('a.js-cookies-info-reject')
    }

    testData = {
        mainURL: process.env.MAIN_URL + "/",
        headerLogoTitle: "Přejít na hlavní stránku",
        headerLogoHref: process.env.MAIN_URL + "/",
        headerLogoImage: "https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg",
        searchInputCaption: "Co hledáte? Např. kabel AlzaPower...",
        searchInputButtonText: "Hledat",
        cartTitle: "Přejít do košíku",
        cartHref: process.env.MAIN_URL + "/" + process.env.CART_URL
    }
}