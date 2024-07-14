import { Page, expect, test } from "@playwright/test";
import { TypicodeInit } from "../../../pageObjects/typicode/typicodeInit";

test.describe("E2E - Google Mail", () => {
    test.describe.configure({ mode: 'serial' })
    let page: Page
    let typicode: TypicodeInit
    let userId: number

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        typicode = new TypicodeInit()
        userId = await typicode.randomUserId()
    })

    test("Print user email to the console", async () => {
        await typicode.getUserEmail(userId)
    })

    test("Verify posts", async () => {
        await expect(await typicode.verifyPosts(userId)).toBeTruthy()
    })

    test("Create post and verify status", async () => {
        await expect(await typicode.createPost(userId)).toBe(201)
    })
})