import { Locator, Page, expect } from "@playwright/test";

export class GoogleEmailPO {

    rightContainer: Locator
    rightContainerComposeButton: Locator

    emailTable: Locator
    emailTableRow: Locator

    messageWindow: Locator
    messageContainer: Locator
    messageForm: Locator
    messageRecipientInput: Locator
    messageSubjectInput: Locator
    messageBodyInput: Locator
    messageSendButton: Locator
    messageMoreOptions: Locator
    messageOptionLabel: Locator
    messageOptionLabelItemSocial: Locator

    emailUnread: Locator
    emailUnreadNewest: Locator

    spanRoleButton: Locator

    moreOptions: Locator

    moreEmailOptions: Locator
    emailContainer: Locator
    emailSubject: Locator
    emailText: Locator


    constructor(page: Page) {
        //MoreOptionMenu
        this.moreOptions = page.getByLabel("More options")
        this.messageOptionLabel = page.getByRole('menuitem', { name: 'Label' })
        this.messageOptionLabelItemSocial = page.getByRole('menuitemcheckbox', { name: 'Social' })

        //right menu contianer
        this.rightContainer = page.locator('div').getByRole("navigation")
        this.rightContainerComposeButton = this.rightContainer.getByRole('button', { name: 'Compose' })

        //message container
        this.messageWindow = page.locator('div').getByRole("dialog").nth(0)
        this.messageContainer = this.messageWindow.locator('table[role="presentation"]')
        this.messageForm = this.messageContainer.locator('form')
        //this.messageRecipientInput = this.messageForm.locator('input[aria-label="To recipients"]')
        this.messageRecipientInput = this.messageForm.getByLabel("To recipients")
        //this.messageSubjectInput = this.messageForm.locator('input[name="subjectbox"]')
        this.messageSubjectInput = this.messageForm.getByLabel("Subject")
        this.messageBodyInput = this.messageContainer.locator('div[role="textbox"]')
        this.messageSendButton = this.messageContainer.getByLabel("Send ‪(Ctrl-Enter)‬")
        this.messageMoreOptions = this.messageContainer.locator(this.moreOptions)

        //Email items table
        this.emailTable = page.locator('table[role="grid"]')
        this.emailTableRow = this.emailTable.locator("tr")
        //this.emailUnread = page.getByRole('row', { name: `unread, ${this.testData.messageSubjectText}` })
        this.emailUnread = this.emailTable.locator("tr.zE")
        this.emailUnreadNewest = this.emailUnread.nth(0)

        this.spanRoleButton = page.locator('span[role="button"]')

        //Email Message Window
        this.moreEmailOptions = page.getByRole('button', { name: 'More email options' })
        this.emailContainer = page.locator('div[role="main"]')
        this.emailSubject = this.emailContainer.locator("h2")
        this.emailText = this.emailContainer.locator('div[dir="ltr"]')

    }

    testData = {
        messageSubjectText: "Test Email Subject",
        messageBodyText: "Test Email Body"


    }

    async waitForEmail(page: Page, emailCount: number) {
        for (let i = 0; i < 10; i++) {
            if (emailCount + 1 == await this.emailTableRow.count()) {
                //console.log("New email has arrived")
                return true
            }
            else {
                //console.log("Still Nothing")
                await page.waitForTimeout(2000)
            }
        }
        return false
    }

    async starNewestUnreadEmail() {
        await this.emailUnreadNewest.locator('span[role="button"]').click()
    }

    async sendGoogleEmail(user) {
        await expect(this.rightContainerComposeButton).toBeVisible()
        await this.rightContainerComposeButton.click()
        await expect(this.messageForm).toBeVisible()
        await this.messageRecipientInput.fill(user.email)
        await this.messageSubjectInput.fill(this.testData.messageSubjectText)
        await this.messageBodyInput.fill(this.testData.messageBodyText)
        await this.messageMoreOptions.click()
        await this.messageOptionLabel.hover()
        await expect(this.messageOptionLabelItemSocial).not.toBeChecked()
        await this.messageOptionLabelItemSocial.click()
        await this.messageSendButton.click()
    }

}