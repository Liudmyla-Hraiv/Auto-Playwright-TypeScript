import {expect, test} from "../base/pomFixture";
import * as LogData from "../test-data/LoginPage-data.json";
import * as BasicData from "../test-data/Basic-data.json";
import * as FinData from "../test-data/FinishOrder-data.json";
import * as inventData from "../test-data/Inventory-data.json";
import * as CartData from "../test-data/Cart-data.json";


/* Checking the full order path for 2 elements with checking total price*/

test("Finish Order", async ({page, loginPage, inventoryPage, cartPage, checkout1Page, checkout2Page, finishPage}) =>{
    //Login
    await page.goto(BasicData.BaseURL);
    await expect(page.locator(BasicData.LoginLogoLoc)).toHaveText(BasicData.Logo);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await expect(page).toHaveScreenshot('FinishTest_1.png', {fullPage: true});
    await loginPage.clickLoginBtn();
    
    //Add 2 items to the carts on Inventory Page
    await inventoryPage.addItem_5_click();
    await inventoryPage.addItem_6_click();
    await inventoryPage.clickCartBtn();
    await expect (page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName5); 
    await expect (page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName6); 
    await expect(page).toHaveScreenshot('FinishTest_2.png', {fullPage: true});

    //step for next page
    await cartPage.clickCheckoutBtn();

    //Fill first checkout page 
    await checkout1Page.enterFirstName(FinData.firstName);
    await checkout1Page.enterLastName(FinData.lastName);
    await checkout1Page.enterZipCode(FinData.zip);
    await expect(page).toHaveScreenshot('FinishTest_3.png', {fullPage: true});
    await checkout1Page.clickContinueBtn();
    
    await expect(page).toHaveScreenshot('FinishTest_4.png', {fullPage: true});
    //Fill second checkout page
    await expect (page.locator(CartData.TitleLoc1)).toHaveText(inventData.itemName5); 
    await expect (page.locator(CartData.TitleLoc2)).toHaveText(inventData.itemName6); 


    await expect (page.locator(FinData.itemTotalLoc)).toHaveText("Item total: $23.98");
    await expect (page.locator(FinData.TaxLoc)).toHaveText("Tax: $1.92");  
    await expect (page.locator(FinData.totalLoc)).toHaveText("Total: $25.90"); 
    await checkout2Page.clickLFinishBtn();

    //Finish order
    //Check present "Thanks Message"
    await expect (page.locator(FinData.ThanksTextLoc)).toHaveText(FinData.ThanksMsg);
    console.log(page.textContent(FinData.ThanksTextLoc));
    // //Check present "Complete Message"
    await expect (page.locator(FinData.StatusTextLoc)).toHaveText(FinData.StatusMsg);
    console.log(page.textContent(FinData.StatusTextLoc));
    await expect(page).toHaveScreenshot('FinishTest_5.png', {fullPage: true});
    //Back to Home Page
    await finishPage.clickBackHomeBtn();
})