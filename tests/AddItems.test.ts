import {expect, test} from "../base/pomFixture";
import * as LogData from "../test-data/LoginPage-data.json";
import * as BasicData from "../test-data/Basic-data.json";
import * as inventData from "../test-data/Inventory-data.json";
import * as CartData from "../test-data/Cart-data.json";



/* Checking the full order path of 3 elements with checking QUANTITY and NAME elements */

test("Add 3 items from inventory page ", async ({page, loginPage, inventoryPage, cartPage}) =>{
    //Login
    await page.goto(BasicData.BaseURL);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();

    //Add items to the carts on Inventory Page
    await inventoryPage.addItem_1_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await expect(page).toHaveScreenshot('AddTest_10.png', {fullPage: true});
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("1");
    await expect(page).toHaveScreenshot('AddTest_11.png', {fullPage: true});
              
    await cartPage.clickShoppingBtn();

    await inventoryPage.addItem_2_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_12.png', {fullPage: true});
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_13.png', {fullPage: true});

    await cartPage.clickShoppingBtn();

    await inventoryPage.addItem_3_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("3");
    await expect(page).toHaveScreenshot('AddTest_14.png', {fullPage: true});
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("3");
    await expect(page).toHaveScreenshot('AddTest_15.png', {fullPage: true});
    
})

/* Checking the full order path of 3 elements with checking QUANTITY and NAME elements */

test("Add 3 items, remove 3 items", async ({page, loginPage, inventoryPage, cartPage}) =>{
    //Login
    await page.goto(BasicData.BaseURL);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    await expect(page).toHaveScreenshot('AddTest_1.png', {fullPage: true});


    //Add 2items to the carts on Inventory Page
    await inventoryPage.addItem_1_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.addItem_2_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_2.png', {fullPage: true});
    //Check presents 2 items on Cart page
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    await expect(page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName2); 
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_3.png', {fullPage: true});

    // Remove from Cart page
    await cartPage.removeItem_1_click();
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("1");
    await cartPage.clickShoppingBtn();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await expect(page).toHaveScreenshot('AddTest_4.png', {fullPage: true});
    //Add items from Description page
    await inventoryPage.titelItem_4_click();
    await page.locator(inventData.addFromtDescrPageLoc).click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_5.png', {fullPage: true});
    await inventoryPage.clickBackBtn();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName4); 
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("2");
    await expect(page).toHaveScreenshot('AddTest_6.png', {fullPage: true});
    await cartPage.clickShoppingBtn();

    //Remove item from Description page
    await inventoryPage.titelItem_2_click();
    await page.locator(inventData.removeFromDescrPageLoc).click();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await expect(page).toHaveScreenshot('AddTest_7.png', {fullPage: true});
    await inventoryPage.clickBackBtn();
    await expect(page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.cartBadgeLoc)).toHaveText("1");
    await expect(page).toHaveScreenshot('AddTest_8.png', {fullPage: true});
    await cartPage.clickShoppingBtn();

    //Remove item from Inventory page
    await inventoryPage.removeItem_4_click();
    await expect(page.locator(inventData.cartBadgeLoc)).toBeHidden();
    await inventoryPage.clickCartBtn();
    await expect(page.locator(CartData.cartBadgeLoc)).toBeHidden();
    await expect(page).toHaveScreenshot('AddTest_9.png', {fullPage: true});
})