import { Locator, expect, Page, } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly siteTitle: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator
    readonly errorMessage: Locator;
    readonly lostPasswordButton: Locator;



    constructor( page: Page) {
        this.page = page,
        this.siteTitle = page.locator('.page-title');
        this.usernameInput =  page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton =page.getByRole('button', {name: 'Login'});
        this.errorMessage = page.locator('.woocommerce-error li');
        this.lostPasswordButton = page.getByRole('link', {name: 'Lost your password?'});
    };

    async loadLoginPage() {
        await this.page.goto('/my-account/');
        //await expect(this.siteTitle).toContainText('My account');
    };
};