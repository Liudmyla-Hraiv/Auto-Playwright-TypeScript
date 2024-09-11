import {test as baseTest} from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import InventoryPage from "../Pages/InventoryPage";
import CartPage from "../Pages/CartPage";
import CheckoutFirst from "../Pages/Checkout-1-Page";
import CheckoutSecond from "../Pages/Checkout-2-Page";
import FinishPage from "../Pages/FinishPage";

type pages = {
    loginPage: LoginPage;
    inventoryPage : InventoryPage;
    cartPage: CartPage;
    checkout1Page: CheckoutFirst;
    checkout2Page: CheckoutSecond;
    finishPage: FinishPage;
};
const testPages = baseTest.extend<pages>({

    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },
    page: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
        await page.close();
    },

    loginPage: async({page}, use) =>{
        await use (new LoginPage(page));
    },
    inventoryPage: async({page}, use) =>{
        await use (new InventoryPage(page));
    },
    cartPage: async({page}, use) =>{
        await use (new CartPage(page));
    },
    checkout1Page: async({page}, use) =>{
        await use (new CheckoutFirst(page));
    },
    checkout2Page: async({page}, use) =>{
        await use (new CheckoutSecond(page));
    },
    finishPage: async({page}, use) =>{
        await use (new FinishPage(page));
    },
});
export const test = testPages;
export const expect = testPages.expect;