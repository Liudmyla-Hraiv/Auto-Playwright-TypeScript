import {expect, test} from "../base/pomFixture";
import * as data from "../test-data/Test-data.json"

const ThanksLoc = "h2[data-test='complete-header']";
const CompleteLoc = ".title";
const TwitterLoc = "a[data-test='social-twitter']";
const FacebookLoc = "a[data-test='social-facebook']";
const LinkedinLoc = "a[data-test='social-linkedin']";
const FooterLoc = "div.footer_copy";
const BurgerMenu = "#react-burger-menu-btn";

test("Finish Order", async ({page, loginPage, inventoryPage, cartPage,
                        checkout1Page, checkout2Page, finishPage}) =>{
    //Login
    await page.goto(data.BaseURL);
    expect(await page.title()).toBe(data.title);
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();

    //Add 3 items to the carts
    expect(await page.title()).toBe(data.title);
    expect(await page.locator(BurgerMenu)).toBeEnabled();
    expect(await page.locator(TwitterLoc)).toBeEnabled();
    expect(await page.locator(FacebookLoc)).toBeEnabled();
    expect(await page.locator(LinkedinLoc)).toBeEnabled();
    expect(await page.locator(FooterLoc)).toBeEnabled();
    expect (await page.locator(FooterLoc)).toHaveText(data.FooterText);

    await inventoryPage.addFirstItem();
    await inventoryPage.clickCartBtn();
    await cartPage.clickShoppingBtn();
    await inventoryPage.addThirdItem();
    await inventoryPage.clickCartBtn();

    //Start checkout 
    expect(await page.title()).toBe(data.title);
    expect(await page.locator(BurgerMenu)).toBeEnabled();
    expect(await page.locator(TwitterLoc)).toBeEnabled();
    expect(await page.locator(FacebookLoc)).toBeEnabled();
    expect(await page.locator(LinkedinLoc)).toBeEnabled();
    expect(await page.locator(FooterLoc)).toBeEnabled();
    expect (await page.locator(FooterLoc)).toHaveText(data.FooterText);
    await cartPage.clickCheckoutBtn();

    //Fill first checkout page
    expect(await page.title()).toBe(data.title);
    expect(await page.locator(BurgerMenu)).toBeEnabled();
    expect(await page.locator(TwitterLoc)).toBeEnabled();
    expect(await page.locator(FacebookLoc)).toBeEnabled();
    expect(await page.locator(LinkedinLoc)).toBeEnabled();
    expect(await page.locator(FooterLoc)).toBeEnabled();
    expect (await page.locator(FooterLoc)).toHaveText(data.FooterText);
    await checkout1Page.enterFirstName(data.firstName);
    await checkout1Page.enterLastName(data.lastName);
    await checkout1Page.enterZipCode(data.zip);
    await checkout1Page.clickContinueBtn();
    //Fill second checkout page
    expect(await page.title()).toBe(data.title);
    expect(await page.locator(BurgerMenu)).toBeEnabled();
    expect(await page.locator(TwitterLoc)).toBeEnabled();
    expect(await page.locator(FacebookLoc)).toBeEnabled();
    expect(await page.locator(LinkedinLoc)).toBeEnabled();
    expect(await page.locator(FooterLoc)).toBeEnabled();
    expect (await page.locator(FooterLoc)).toHaveText(data.FooterText);
    await checkout2Page.clickLFinishBtn();
    await checkout2Page.page.screenshot();

    //Finish order;
    expect(await page.title()).toBe(data.title);
    expect(await page.locator(BurgerMenu)).toBeEnabled();
    expect(await page.locator(TwitterLoc)).toBeEnabled();
    expect(await page.locator(FacebookLoc)).toBeEnabled();
    expect(await page.locator(LinkedinLoc)).toBeEnabled();
    expect(await page.locator(FooterLoc)).toBeEnabled();
    expect (await page.locator(FooterLoc)).toHaveText(data.FooterText);
    //Check present "Thanks Message"
    expect (await page.locator(ThanksLoc)).toHaveText(data.ThanksMsg);
    console.log(await page.textContent(ThanksLoc));
    // //Check present "Complete Message"
    expect (await page.locator(CompleteLoc)).toHaveText(data.CompleteMsg);
    console.log(await page.textContent(CompleteLoc));
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //Back to Home Page
    await finishPage.clickBackHomeBtn();
})