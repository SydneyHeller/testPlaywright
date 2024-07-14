import { Locator, expect, Page } from "@playwright/test";

export class GoogleLoginPO {

    emailInput: Locator
    footerBlock: Locator
    buttonNext: Locator
    passwordInput: Locator


    constructor(page: Page) {
        this.emailInput = page.locator('input[type="email"]')
        this.passwordInput = page.locator('input[name="Passwd"]')
        this.footerBlock = page.locator('div.JYXaTc')
        this.buttonNext = this.footerBlock.locator("button").nth(0)



    }

    testData = {
        mainURL: process.env.MAIN_URL + "",
        mailBoxURL: "mail.google.com"
    }

    async googleLogin(page: Page, user) {
        await expect(this.emailInput).toBeVisible()
        await this.emailInput.fill(user.email)
        await this.buttonNext.click()
        await expect(this.passwordInput).toBeVisible({ timeout: 20000 })
        await this.passwordInput.fill(user.password)
        await this.buttonNext.click()
        await page.waitForURL('**\/' + this.testData.mailBoxURL + '\/**')
    }

}