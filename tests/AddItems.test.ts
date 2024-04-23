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
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("1");
              
    await cartPage.clickShoppingBtn();

    await inventoryPage.addItem_2_click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("2");

    await cartPage.clickShoppingBtn();

    await inventoryPage.addItem_3_click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("3");
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("3");
    
})

/* Checking the full order path of 3 elements with checking QUANTITY and NAME elements */

test("Add 3 items, remove 3 items", async ({page, loginPage, inventoryPage, cartPage}) =>{
    //Login
    await page.goto(BasicData.BaseURL);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();

    //Add 2items to the carts on Inventory Page
    await inventoryPage.addItem_1_click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.addItem_2_click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("2");

    //Check presents 2 items on Cart page
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName1); 
    expect (await page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName2); 
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("2");

    // Remove from Cart page
    await cartPage.removeItem_1_click();
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("1");
    await cartPage.clickShoppingBtn();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("1");

    //Add items from Description page
    await inventoryPage.titelItem_4_click();
    await page.locator(inventData.addFromtDescrPageLoc).click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await inventoryPage.clickBackBtn();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("2");
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName4); 
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("2");
    await cartPage.clickShoppingBtn();

    //Remove item from Description page
    await inventoryPage.titelItem_2_click();
    await page.locator(inventData.removeFromDescrPageLoc).click();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.clickBackBtn();
    expect (await page.locator(inventData.cartBadgeLoc)).toHaveText("1");
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.cartBadgeLoc)).toHaveText("1");
    await cartPage.clickShoppingBtn();

    //Remove item from Inventory page
    await inventoryPage.removeItem_4_click();
    expect (await page.locator(inventData.cartBadgeLoc)).toBeHidden();
    await inventoryPage.clickCartBtn();
    expect (await page.locator(CartData.cartBadgeLoc)).toBeHidden();
})