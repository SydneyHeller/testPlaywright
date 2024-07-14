import { Login } from "../../../global"
import { GoogleEmailPO } from "./googlePO/googleEmail";
import { GoogleLoginPO } from "./googlePO/googleLogin.PO"

import * as userLogin from "../../fixtures/google/helltester"

export const TestLogin: Array<Login> = [
    userLogin.GoogleUserLogin
]

export class GoogleInit {
    readonly emailPO: GoogleEmailPO
    readonly loginPO: GoogleLoginPO;

    constructor(page) {
        this.emailPO = new GoogleEmailPO(page)
        this.loginPO = new GoogleLoginPO(page)
    }

}