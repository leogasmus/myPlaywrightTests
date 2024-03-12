import { Locator, Page, } from '@playwright/test'

export class lostPasswordPage {
    readonly page: Page;
    readonly siteTitle: Locator;
    readonly usernameInput: Locator;
    readonly submitButton: Locator
    readonly message: Locator;
   

    constructor( page: Page) {
        this.page = page,
        this.siteTitle = page.locator('.page-title');
        this.usernameInput =  page.locator('#user_login')
        this.submitButton =  page.getByRole('button', {name: 'Reset password'});
        this.message = page.locator('.woocommerce-message')
    };
};