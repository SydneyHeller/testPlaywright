import { Page, expect } from "@playwright/test";
import { AlzaInit } from "../../../../pageObjects/alza/alzaInit";
import { AlzaTestItemData } from "../../../../../global";

export class SearchInput {
    alza: AlzaInit

    constructor(page: Page) {
        this.alza = new AlzaInit(page);
    }

    /**
     * Test the searchInput default state
     */
    async searchInputDefaultEmpty() {
        await expect(this.alza.commonPO.searchInput).toBeVisible()
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("placeholder", this.alza.commonPO.testData.searchInputCaption)
        await expect(this.alza.commonPO.searchButton).toBeVisible()
        await expect(this.alza.commonPO.searchButton).toHaveText(this.alza.commonPO.testData.searchInputButtonText)
        await expect(this.alza.commonPO.searchInputRemoveButton).toBeHidden()
    }

    /**
     * Test the searchInput after user type item that can be found
     * Test 3 - Search Item -> "View item" detail/page
     */
    async searchInputSet(page: Page, itemData: AlzaTestItemData) {
        //Check the searchbox without searchItem
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("value", "")
        await expect(this.alza.commonPO.searchInputRemoveButton).toBeHidden()
        //Input item to search
        await this.alza.commonPO.searchInput.fill(itemData.name)
        //Check the searchbox after itemToSearch is set
        await expect(this.alza.commonPO.searchInput).toBeVisible()
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("placeholder", this.alza.commonPO.testData.searchInputCaption)
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("value", itemData.name)
        await expect(this.alza.commonPO.searchButton).toBeVisible()
        await expect(this.alza.commonPO.searchButton).toHaveText(this.alza.commonPO.testData.searchInputButtonText)
        await expect(this.alza.commonPO.searchInputRemoveButton).toBeVisible()
        await expect(this.alza.commonPO.searchResultCommoditiesItem.nth(0)).toBeVisible()
        await expect(this.alza.commonPO.searchResultCommoditiesItem.nth(0)).toContainText(itemData.fullName)
        await this.alza.commonPO.searchResultCommoditiesItem.nth(0).click({ timeout: 1000 })
        await page.waitForURL(`**${itemData.directURL}**`)
        await expect(this.alza.itemDetailPO.title).toHaveText(itemData.fullName)
    }

    /**
 * Test the searchInput after user type item that cannot be Found
 * Example of Test 2 - Search Item -> Item not found
 */
    async searchInputCannotFound(page: Page, itemData: AlzaTestItemData) {
        //Check the searchbox without searchItem
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("value", "")
        await expect(this.alza.commonPO.searchInputRemoveButton).toBeHidden()
        //Input item to search
        await this.alza.commonPO.searchInput.fill(itemData.name)
        //Check the searchbox after itemToSearch is set
        await expect(this.alza.commonPO.searchInput).toBeVisible()
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("placeholder", this.alza.commonPO.testData.searchInputCaption)
        await expect(this.alza.commonPO.searchInput).toHaveAttribute("value", itemData.name)
        await expect(this.alza.commonPO.searchButton).toBeVisible()
        await expect(this.alza.commonPO.searchButton).toHaveText(this.alza.commonPO.testData.searchInputButtonText)
        await expect(this.alza.commonPO.searchInputRemoveButton).toBeVisible()
        await expect(this.alza.commonPO.searchResultCommoditiesItem.nth(0)).toBeVisible()
        await expect(this.alza.commonPO.searchResultCommoditiesItem.nth(0)).toHaveText(itemData.fullName)
        await this.alza.commonPO.searchResultCommoditiesItem.getByText(itemData.fullName).click()
        await page.waitForURL(`**${itemData.directURL}**`)
        await expect(this.alza.itemDetailPO.title).toHaveText(itemData.fullName)
    }
}
