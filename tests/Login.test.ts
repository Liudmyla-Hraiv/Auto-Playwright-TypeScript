import {expect, test} from "../base/pomFixture";
import * as LogData from "../test-data/LoginPage-data.json";
import * as BasicData from "../test-data/Basic-data.json";

test("Login test with valid data", async ({page, loginPage}) => {
    
    await page.goto(BasicData.BaseURL);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
}
)


test("Check login error w/o password", async ({page, loginPage}) => {

    await page.goto(BasicData.BaseURL);
    //Fill user-field 
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword("");
    await loginPage.clickLoginBtn();
    //Check error message 
    expect(await page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorPassword);
    console.log(await page.textContent(LogData.ErrorMsgLocator));
}
)

test("Check login error w/o user-name", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill password-field 
    await loginPage.enterUserName("");
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorUser);
    console.log(await page.textContent(LogData.ErrorMsgLocator));
}
)

test("Login test with invalid user-name", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields 
    await loginPage.enterUserName(LogData.invalidUserName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(LogData.ErrorMsgLocator))
    .toHaveText(LogData.ErrorUserAndPassword);
    console.log(await page.textContent(LogData.ErrorMsgLocator));
}
)


test("Login test with invalid password", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(LogData.ErrorMsgLocator))
    .toHaveText(LogData.ErrorUserAndPassword);
    console.log(await page.textContent(LogData.ErrorMsgLocator));
}
)
test("Login test with invalid data", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields
    await loginPage.enterUserName(LogData.invalidUserName);
    await loginPage.enterPassword(LogData.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    expect(await page.locator(LogData.ErrorMsgLocator))
    .toHaveText(LogData.ErrorUserAndPassword);
    console.log(await page.textContent(LogData.ErrorMsgLocator));
}
)