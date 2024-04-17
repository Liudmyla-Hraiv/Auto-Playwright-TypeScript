import { Page } from "@playwright/test";
export default class CheckoutFirst{

    constructor(public page: Page){}

    async enterFirstName(FirstName: string){
        await this.page.fill("#first-name", FirstName);
    }
    async enterLastName(LastName: string){
        await this.page.fill("#last-name", LastName);
    }
    async enterZipCode(ZipCode: string){
        await this.page.fill("#postal-code", ZipCode);
    }
    async clickContinueBtn(){

     await this.page.click("#continue") 
    }
    async clickCancelBtn(){
        await this.page.locator("#cancel").scrollIntoViewIfNeeded();
        await this.page.click("#cancel");  
    }
}