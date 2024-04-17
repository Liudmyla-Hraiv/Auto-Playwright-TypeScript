import { Page } from "@playwright/test";
export default class FinishPage {

    constructor(public page: Page){}
    
    async clickBackHomeBtn(){
      await this.page.locator("#back-to-products").scrollIntoViewIfNeeded();
      await this.page.click("#back-to-products");
    }
}