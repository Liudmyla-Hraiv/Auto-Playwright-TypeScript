import {Page} from "@playwright/test";
import * as CartData from "../test-data/Cart-data.json";


export default class CartPage{
constructor(public page: Page){}

async clickCheckoutBtn(){
    
   await this.page.locator(CartData.CheckoutBtnLoc).scrollIntoViewIfNeeded();
   await this.page.click(CartData.CheckoutBtnLoc);
}
async clickShoppingBtn(){
    await this.page.locator(CartData.ShoppingBtnLoc).scrollIntoViewIfNeeded();
    await this.page.click(CartData.ShoppingBtnLoc);
}

async removeItem_1_click(){
    await this.page.locator(CartData.removeBtnLoc1).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc1);
}
async removeItem_2_click(){
    await this.page.locator(CartData.removeBtnLoc2).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc2);
}
async removeItem_3_click(){
    await this.page.locator(CartData.removeBtnLoc3).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc3);
}
async removeItem_4_click(){
    await this.page.locator(CartData.removeBtnLoc4).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc4);
}
async removeItem_5_click(){
    await this.page.locator(CartData.removeBtnLoc5).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc5);
}
async removeItem_6_click(){
    await this.page.locator(CartData.removeBtnLoc6).scrollIntoViewIfNeeded();
    await this.page.click(CartData.removeBtnLoc6);
}
}