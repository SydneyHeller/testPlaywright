import { Page, expect, test } from "@playwright/test";
import { GoogleInit, TestLogin } from "../../../pageObjects/google/googleInit";
import { GoogleTest } from "../../lib/google/googleTest";

test.describe("E2E - Google Mail", () => {
    test.describe.configure({ mode: 'serial' })
    let page: Page
    let google: GoogleInit
    let googleTest: GoogleTest
    let emailCount: number

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        google = new GoogleInit(page)
        googleTest = new GoogleTest(page)

        await page.goto(google.loginPO.testData.mainURL)
        await google.loginPO.googleLogin(page, TestLogin[0])
        emailCount = await google.emailPO.emailTableRow.count()
        await google.emailPO.sendGoogleEmail(TestLogin[0])
        await google.emailPO.waitForEmail(page, emailCount)
        await google.emailPO.starNewestUnreadEmail()
        await google.emailPO.emailUnreadNewest.click()
    })

    test("Verify the meial Label is Social", async () => {
        await google.emailPO.moreEmailOptions.click()
        await google.emailPO.messageOptionLabel.hover()
        await expect(google.emailPO.messageOptionLabelItemSocial).toBeChecked()
    })

    test("Verify the subject and body of the received email", async () => {
        await expect(google.emailPO.emailSubject).toHaveText(google.emailPO.testData.messageSubjectText)
        await expect(google.emailPO.emailText).toHaveText(google.emailPO.testData.messageBodyText)
    })
})