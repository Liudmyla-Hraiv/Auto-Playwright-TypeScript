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
    await expect(await page.title()).toBe(BasicData.title);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await expect(page).toHaveScreenshot('FinishTest_1.png', {fullPage: true});
    await loginPage.clickLoginBtn();
    

    //Checking the FOOTER  and HEADER elements on Inventory page
    await expect(await page.title()).toBe(BasicData.title);
    await expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    await expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    await expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    //Add 2 items to the carts on Inventory Page
    await inventoryPage.addItem_5_click();
    await inventoryPage.addItem_6_click();
    await inventoryPage.clickCartBtn();
    await expect (await page.locator(CartData.TitleLoc1)).toContainText(inventData.itemName5); 
    await expect (await page.locator(CartData.TitleLoc2)).toContainText(inventData.itemName6); 
    await expect(page).toHaveScreenshot('FinishTest_2.png', {fullPage: true});

    //Checking the FOOTER  and HEADER elements on Cart page
    await expect(await page.title()).toBe(BasicData.title);
    await expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    await expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    await expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    //step for next page
    await cartPage.clickCheckoutBtn();

  
    //checking the FOOTER  and HEADER elements on Checkout-1 page
    await expect(await page.title()).toBe(BasicData.title);
    await expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    await expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    await expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    //Fill first checkout page 
    await checkout1Page.enterFirstName(FinData.firstName);
    await checkout1Page.enterLastName(FinData.lastName);
    await checkout1Page.enterZipCode(FinData.zip);
    await expect(page).toHaveScreenshot('FinishTest_3.png', {fullPage: true});
    await checkout1Page.clickContinueBtn();
    
    //Checking the FOOTER  and HEADER elements on Checkout-2 page
    await expect(await page.title()).toBe(BasicData.title);
    await expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    await expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    await expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    await expect(page).toHaveScreenshot('FinishTest_4.png', {fullPage: true});
    //Fill second checkout page
    await expect (await page.locator(CartData.TitleLoc1)).toHaveText(inventData.itemName5); 
    await expect (await page.locator(CartData.TitleLoc2)).toHaveText(inventData.itemName6); 


    await expect (await page.locator(FinData.itemTotalLoc)).toHaveText("Item total: $23.98");
    await expect (await page.locator(FinData.TaxLoc)).toHaveText("Tax: $1.92");  
    await expect (await page.locator(FinData.totalLoc)).toHaveText("Total: $25.90"); 
    await checkout2Page.clickLFinishBtn();

    //checking the FOOTER  and HEADER elements on Finish page
    await expect(await page.title()).toBe(BasicData.title);
    await expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    await expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    await expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    await expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    //Finish order
    //Check present "Thanks Message"
    await expect (await page.locator(FinData.ThanksTextLoc)).toHaveText(FinData.ThanksMsg);
    console.log(await page.textContent(FinData.ThanksTextLoc));
    // //Check present "Complete Message"
    await expect (await page.locator(FinData.StatusTextLoc)).toHaveText(FinData.StatusMsg);
    console.log(await page.textContent(FinData.StatusTextLoc));
    await expect(page).toHaveScreenshot('FinishTest_5.png', {fullPage: true});
    //Back to Home Page
    await finishPage.clickBackHomeBtn();
})