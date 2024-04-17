import {Page} from "@playwright/test";
export default class InventoryPage{

    constructor(public page: Page){}

    async addFirstItem(){
        await this.page.locator("#add-to-cart-sauce-labs-onesie")
                .click();
    }
    async addSecondItem(){
        await this.page.locator("#add-to-cart-sauce-labs-bolt-t-shirt")
                .click();
    }
    async addThirdItem(){
        await this.page.locator("#add-to-cart-sauce-labs-backpack")
                .click();
    }
    async clickCartBtn(){
        await this.page.click("a.shopping_cart_link");
    }
}
