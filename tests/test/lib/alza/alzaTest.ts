import { Page } from "@playwright/test"

import { Cart } from "./alzaTest/alzaTest.cart"
import { CrossPage } from "./alzaTest/alzaTest.crossPage"
import { ItemDetail } from "./alzaTest/alzaTest.itemDetail"
import { SearchInput } from "./alzaTest/alzaTest.searchInput"


export class AlzaTest {
    readonly cart: Cart
    readonly crossPage: CrossPage
    readonly itemDetail: ItemDetail
    readonly searchInput: SearchInput

    constructor(page: Page) {
        this.cart = new Cart(page)
        this.crossPage = new CrossPage(page)
        this.itemDetail = new ItemDetail(page)
        this.searchInput = new SearchInput(page)
    }
}