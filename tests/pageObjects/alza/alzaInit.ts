import { AlzaCartPO } from "./alzaPO/alzaCart.PO";
import { AlzaCommonPO } from "./alzaPO/alzaCommon.PO";
import { AlzaCrossPagePO } from "./alzaPO/alzaCrossPage.PO"
import { AlzaItemDetailPO } from "./alzaPO/alzaItemDetail.PO";

import { AlzaTestItemData } from "../../../global";

import * as testItem1 from "../../fixtures/alzaItems/dualsenseVolcanicRed"
import * as testItem2 from "../../fixtures/alzaItems/xboxControllerBlue"
import * as testItem3 from "../../fixtures/alzaItems/quickshotJoystick"

export let TestItemArray: Array<AlzaTestItemData> = [
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