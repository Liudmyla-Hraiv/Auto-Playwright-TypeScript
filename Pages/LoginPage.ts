import {Page} from "@playwright/test";
export default class LoginPage{

    constructor(public page: Page){}

    async enterUserName(UserName: string){
        await this.page.fill("#user-name", UserName);
    }
    async enterPassword(Password: string){
        await this.page.fill("#password", Password);
    }
    async clickLoginBtn(){
        await this.page.click("#login-button");
    }
}