import { Locator, Page, } from '@playwright/test'
import { getRandomString } from '../utils/data-helpers';

export class LostPasswordPage {
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

    async generateMail() {
        return `${await getRandomString()}@gmail.com`
    }
};