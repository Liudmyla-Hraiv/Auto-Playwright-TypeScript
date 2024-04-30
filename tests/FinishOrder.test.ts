import {expect, test} from "../base/pomFixture";
import * as LogData from "../test-data/LoginPage-data.json";
import * as BasicData from "../test-data/Basic-data.json";
import * as FinData from "../test-data/FinishOrder-data.json";

/* Checking the full order path of 3 elements with checking the FOOTER  and HEADER elements */

test("Finish Order", async ({page, loginPage, inventoryPage, cartPage,
                        checkout1Page, checkout2Page, finishPage}) =>{
    //Login
    await page.goto(BasicData.BaseURL);
    expect(await page.title()).toBe(BasicData.title);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await expect(page).toHaveScreenshot('FinishTest_1.png', {fullPage: true});
    await loginPage.clickLoginBtn();
    

    //Add 2 items to the carts on Inventory Page
    expect(await page.title()).toBe(BasicData.title);
    expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);

    await inventoryPage.addItem_1_click();
    await inventoryPage.clickCartBtn();
    await cartPage.clickShoppingBtn();
    await inventoryPage.addItem_2_click();
    await inventoryPage.clickCartBtn();
    await expect(page).toHaveScreenshot('FinishTest_2.png', {fullPage: true});

    //Start checkout 
    expect(await page.title()).toBe(BasicData.title);
    expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    await cartPage.clickCheckoutBtn();

    //Fill first checkout page 
    expect(await page.title()).toBe(BasicData.title);
    expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);

    await checkout1Page.enterFirstName(FinData.firstName);
    await checkout1Page.enterLastName(FinData.lastName);
    await checkout1Page.enterZipCode(FinData.zip);
    await expect(page).toHaveScreenshot('FinishTest_3.png', {fullPage: true});
    await checkout1Page.clickContinueBtn();
    //Fill second checkout page
    expect(await page.title()).toBe(BasicData.title);
    expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    await expect(page).toHaveScreenshot('FinishTest_4.png', {fullPage: true});
    await checkout2Page.clickLFinishBtn();

    //Finish order;
    expect(await page.title()).toBe(BasicData.title);
    expect(await page.locator(BasicData.BurgerMenu)).toBeEnabled();
    expect(await page.locator(BasicData.TwitterLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FacebookLoc)).toBeEnabled();
    expect(await page.locator(BasicData.LinkedinLoc)).toBeEnabled();
    expect(await page.locator(BasicData.FooterTextLoc)).toBeEnabled();
    expect (await page.locator(BasicData.FooterTextLoc)).toHaveText(BasicData.FooterText);
    //Check present "Thanks Message"
    expect (await page.locator(FinData.ThanksTextLoc)).toHaveText(FinData.ThanksMsg);
    console.log(await page.textContent(FinData.ThanksTextLoc));
    // //Check present "Complete Message"
    expect (await page.locator(FinData.StatusTextLoc)).toHaveText(FinData.StatusMsg);
    console.log(await page.textContent(FinData.StatusTextLoc));
    await expect(page).toHaveScreenshot('FinishTest_5.png', {fullPage: true});
    
    //Back to Home Page
    await finishPage.clickBackHomeBtn();
})