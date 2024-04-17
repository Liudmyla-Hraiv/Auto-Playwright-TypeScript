import {Page} from "@playwright/test";
export default class CartPage{
constructor(public page: Page){}

async clickCheckoutBtn(){
    
   await this.page.locator("#checkout").scrollIntoViewIfNeeded();
   await this.page.click("#checkout");
}
async clickShoppingBtn(){
    await this.page.locator("#continue-shopping").scrollIntoViewIfNeeded();
    await this.page.click("#continue-shopping");
}
}