import {Page} from "@playwright/test";
import * as inventData from "../test-data/Inventory-data.json";


export default class InventoryPage{

    constructor(public page: Page){}
    // Add parameters
    async addItem_1_click(){
        await this.page.locator(inventData.addBtnLoc1).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc1);
    }
    async addItem_2_click(){
        await this.page.locator(inventData.addBtnLoc2).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc2);
    }
    async addItem_3_click(){
        await this.page.locator(inventData.addBtnLoc3).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc3);
    }
    async addItem_4_click(){
        await this.page.locator(inventData.addBtnLoc4).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc4);
    }
    async addItem_5_click(){
        await this.page.locator(inventData.addBtnLoc5).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc5);
    }
    async addItem_6_click(){
        await this.page.locator(inventData.addBtnLoc6).scrollIntoViewIfNeeded();
        await this.page.click(inventData.addBtnLoc6);
    }
    //Buttons parameters
    async clickCartBtn(){
        await this.page.click(inventData.cartBtnLoc);
    }
    async clickBackBtn(){
        await this.page.click(inventData.backToProductsBtnLoc);
    }
    //Remove parameters
    async removeItem_1_click(){
        await this.page.locator(inventData.removeBtnLoc1).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc1);
    }
    async removeItem_2_click(){
        await this.page.locator(inventData.removeBtnLoc2).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc2);
    }
    async removeItem_3_click(){
        await this.page.locator(inventData.removeBtnLoc3).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc3);
    }
    async removeItem_4_click(){
        await this.page.locator(inventData.removeBtnLoc4).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc4);
    }
    async removeItem_5_click(){
        await this.page.locator(inventData.removeBtnLoc5).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc5);
    }
    async removeItem_6_click(){
        await this.page.locator(inventData.removeBtnLoc6).scrollIntoViewIfNeeded();
        await this.page.click(inventData.removeBtnLoc6);
    }
     //Titel parameters
    async titelItem_1_click(){
    await this.page.locator(inventData.TitleLoc1).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc1);
    }
    async titelItem_2_click(){
    await this.page.locator(inventData.TitleLoc2).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc2);
    }
    async titelItem_3_click(){
    await this.page.locator(inventData.TitleLoc3).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc3);
    }
    async titelItem_4_click(){
    await this.page.locator(inventData.TitleLoc4).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc4);
    }
    async titelItem_5_click(){
    await this.page.locator(inventData.TitleLoc5).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc5);
    }
    async titelItem_6_click(){
    await this.page.locator(inventData.TitleLoc6).scrollIntoViewIfNeeded();
    await this.page.click(inventData.TitleLoc6);
    }
}
