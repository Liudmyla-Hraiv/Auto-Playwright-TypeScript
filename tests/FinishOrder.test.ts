import {expect, test} from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import InventoryPage from "../Pages/InventoryPage";
import CartPage from "../Pages/CartPage";
import CheckoutFirst from "../Pages/Checkout-1-Page";
import CheckoutSecond from "../Pages/Checkout-2-Page";
import FinishPage from "../Pages/FinishPage";

const user = "standard_user";
const password = "secret_sauce";
const BaseURL = "https://www.saucedemo.com";

const first = "Sergio";
const last = "Mario";
const zip = "65045";

const TITLE = "Swag Labs";
const ThanksLoc = "h2[data-test='complete-header']";
const CompleteLoc = ".title";
const ThanksMsg = "Thank you for your order!";
const CompleteMsg = "Checkout: Complete!";


test("Finish Order", async ({page}) =>{
    const log = new LoginPage(page);
    const invent = new InventoryPage(page);
    const cart = new CartPage(page);
    const check1= new CheckoutFirst(page);
    const check2= new CheckoutSecond(page);
    const fin= new FinishPage(page);
    //Login
    await page.goto(BaseURL);
    expect(await page.title()).toBe(TITLE);
    await log.enterUserName(user);
    await log.enterPassword(password);
    await log.clickLoginBtn();

    //Add 3 items to the carts
    expect(await page.title()).toBe(TITLE);

    await invent.addFirstItem();
    await invent.clickCartBtn();
    await cart.clickShoppingBtn();
    await invent.addSecondItem();
    await invent.clickCartBtn();
    await cart.clickShoppingBtn();
    await invent.addThirdItem();
    await invent.clickCartBtn();

    //Start checkout 
    expect(await page.title()).toBe(TITLE);
    await cart.clickCheckoutBtn();

    //Fill first checkout page
    expect(await page.title()).toBe(TITLE);
    await check1.enterFirstName(first);
    await check1.enterLastName(last);
    await check1.enterZipCode(zip);
    await check1.clickContinueBtn();
    //Fill second checkout page
    expect(await page.title()).toBe(TITLE);
    await check2.clickLFinishBtn();
    await check2.page.screenshot();

    //Finish order;
    expect(await page.title()).toBe(TITLE);
    //Check present "Thanks Message"
    expect (await page.locator(ThanksLoc)).toHaveText(ThanksMsg);
    console.log(await page.textContent(ThanksLoc));
    // //Check present "Complete Message"
    expect (await page.locator(CompleteLoc)).toHaveText(CompleteMsg);
    console.log(await page.textContent(CompleteLoc));
    
    //Back to Home Page
    await fin.clickBackHomeBtn();
})