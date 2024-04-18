import {expect, test} from "../base/pomFixture";
import * as data from "../test-data/Test-data.json"

const ErrorMsgLocator = ".error-message-container";


test("Login test with valid data", async ({page, loginPage}) => {
    
    await page.goto(data.BaseURL);
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();
}
)


test("Check login error w/o password", async ({page, loginPage}) => {

    await page.goto(data.BaseURL);
    //Fill user-field 
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword("");
    await loginPage.clickLoginBtn();
    //Check error message 
    expect(await page.locator(ErrorMsgLocator)).toHaveText(data.ErrorPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)

test("Check login error w/o user-name", async ({page, loginPage}) => {
    await page.goto(data.BaseURL);
    //Fill password-field 
    await loginPage.enterUserName("");
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator)).toHaveText(data.ErrorUser);
    console.log(await page.textContent(ErrorMsgLocator));
}
)

test("Login test with invalid user-name", async ({page, loginPage}) => {
    await page.goto(data.BaseURL);
    //Fill fields 
    await loginPage.enterUserName(data.invalidUserName);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator))
    .toHaveText(data.ErrorUserAndPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)


test("Login test with invalid password", async ({page, loginPage}) => {
    await page.goto(data.BaseURL);
    //Fill fields
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator))
    .toHaveText(data.ErrorUserAndPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)
test("Login test with invalid data", async ({page, loginPage}) => {
    await page.goto(data.BaseURL);
    //Fill fields
    await loginPage.enterUserName(data.invalidUserName);
    await loginPage.enterPassword(data.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(ErrorMsgLocator))
    .toHaveText(data.ErrorUserAndPassword);
    console.log(await page.textContent(ErrorMsgLocator));
}
)