import {Page} from "@playwright/test";
export default class CheckoutSecond{
    
    constructor(public page: Page){}

    async clickLFinishBtn(){
        await this.page.locator("#finish").scrollIntoViewIfNeeded();
        await this.page.click("#finish");
    }
}