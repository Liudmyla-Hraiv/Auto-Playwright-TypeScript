import {expect, test} from "@playwright/test";
import LoginPage from "../Pages/LoginPage";

const BaseURL = "https://www.saucedemo.com";
const user = "standard_user";
const password = "secret_sauce";
const invalidUserName = "123";
const InvalidPassword = "123";
const ErrorMsgLocator = ".error-message-container";
const ErrorUser = "Epic sadface: Username is required";
const ErrorPassword = "Epic sadface: Password is required";
const ErrorUserAndPassword = "Epic sadface: Username and password do not match any user in this service";


test("Login test with valid data", async ({page}) => {
    const log = new LoginPage(page);
    await page.goto(BaseURL);
    await log.enterUserName(user);
    await log.enterPassword(password);
    await log.clickLoginBtn();
}
)


test("Check login error w/o password", async ({page}) => {
    const log = new LoginPage(page);
    await page.goto(BaseURL);
    //Fill user-field 
    await log.enterUserName(user);
    await log.enterPassword("");
    await log.clickLoginBtn();
    //Check error message 
    expect(await page.locator(ErrorMsgLocator)).toHaveText(ErrorPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)

test("Check login error w/o user-name", async ({page}) => {
    const log = new LoginPage(page);
    await page.goto(BaseURL);
    //Fill password-field 
    await log.enterUserName("");
    await log.enterPassword(password);
    await log.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator)).toHaveText(ErrorUser);
    console.log(await page.textContent(ErrorMsgLocator));
}
)

test("Login test with invalid user-name", async ({page}) => {
    const log = new LoginPage(page);
    await page.goto(BaseURL);
    //Fill fields 
    await log.enterUserName(invalidUserName);
    await log.enterPassword(password);
    await log.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator))
    .toHaveText(ErrorUserAndPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)


test("Login test with invalid password", async ({page}) => {
    const log = new LoginPage(page);
    await page.goto(BaseURL);
    //Fill fields
    await log.enterUserName(user);
    await log.enterPassword(InvalidPassword);
    await log.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator))
    .toHaveText(ErrorUserAndPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)