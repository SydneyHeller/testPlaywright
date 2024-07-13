import { AlzaCartPO } from "./alzaPO/alzaCart.PO";
import { AlzaCommonPO } from "./alzaPO/alzaCommon.PO";
import { AlzaCrossPagePO } from "./alzaPO/alzaCrossPage.PO"
import { AlzaItemDetailPO } from "./alzaPO/alzaItemDetail.PO";

import { TestItemData } from "../../../global";

import * as testItem1 from "./../../fixtures/items/dualsenseVolcanicRed"
import * as testItem2 from "./../../fixtures/items/xboxControllerBlue"
import * as testItem3 from "./../../fixtures/items/quickshotJoystick"

export let TestItemArray: Array<TestItemData> = [
    testItem1.testItemData,
    testItem2.testItemData,
    testItem3.testItemData
]


export class AlzaInit {
    readonly cartPO: AlzaCartPO;
    readonly commonPO: AlzaCommonPO;
    readonly crossPO: AlzaCrossPagePO;
    readonly itemDetailPO: AlzaItemDetailPO;

    constructor(page) {
        this.cartPO = new AlzaCartPO(page)
        this.commonPO = new AlzaCommonPO(page)
        this.crossPO = new AlzaCrossPagePO(page)
        this.itemDetailPO = new AlzaItemDetailPO(page)
    }
}