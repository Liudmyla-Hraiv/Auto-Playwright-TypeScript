import {expect, test} from "../base/pomFixture";
import * as LogData from "../test-data/LoginPage-data.json";
import * as BasicData from "../test-data/Basic-data.json";

test("1-Login test with valid data", async ({page, loginPage}) => {
    
    await page.goto(BasicData.BaseURL);
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_1.png', {fullPage: true});
}
)


test("2-Check login error w/o password", async ({page, loginPage}) => {

    await page.goto(BasicData.BaseURL);
    //Fill user-field 
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword("");
    await loginPage.clickLoginBtn();
    //Check error message 
    await expect( page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorPassword);
    console.log(page.textContent(LogData.ErrorMsgLocator));
   //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_2.png', {fullPage: true});
}
)

test("3-Check login error w/o user-name", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill password-field 
    await loginPage.enterUserName("");
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    //Check error message 
    await expect(page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorUser);
    console.log(page.textContent(LogData.ErrorMsgLocator));
    //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_3.png', {fullPage: true});
}
)

test("4-Login test with invalid user-name", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields 
    await loginPage.enterUserName(LogData.invalidUserName);
    await loginPage.enterPassword(LogData.password);
    await loginPage.clickLoginBtn();
    //Check error message 
    await expect(page.locator(LogData.ErrorMsgLocator))
    .toHaveText(LogData.ErrorUserAndPassword);
    console.log(page.textContent(LogData.ErrorMsgLocator));
    //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_4.png', {fullPage: true});
}
)


test("5-Login test with invalid password", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields
    await loginPage.enterUserName(LogData.userName);
    await loginPage.enterPassword(LogData.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    await expect(page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorUserAndPassword);
    console.log(page.textContent(LogData.ErrorMsgLocator));
    //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_5.png', {fullPage: true});
}
)
test("6-Login test with invalid data", async ({page, loginPage}) => {
    await page.goto(BasicData.BaseURL);
    //Fill fields
    await loginPage.enterUserName(LogData.invalidUserName);
    await loginPage.enterPassword(LogData.invalidPassword);
    await loginPage.clickLoginBtn();
    //Check error message 

    await expect(page.locator(LogData.ErrorMsgLocator)).toHaveText(LogData.ErrorUserAndPassword);
    console.log(page.textContent(LogData.ErrorMsgLocator));
    //check by screenshot
    await expect(page).toHaveScreenshot('LoginTest_6.png', {fullPage: true});
}
)