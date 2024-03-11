import { test, expect } from '@playwright/test'


test.describe.only('Test shop' , () => {
    test('First test', async ({page}) => {
        await page.goto('https://skleptest.pl/');
        const siteTitle = await page.locator("a.site-title");
        await page.pause();
        await expect(siteTitle).toContainText("Generic Shop");
    });

    test('Open most wanted category', async ({page}) => {
        await page.goto('https://skleptest.pl/');
        await page.click('a[title="Most Wanted"]');
        await expect(page).toHaveURL('https://skleptest.pl/product-category/most-wanted/');
    });

    test('Error when to try login through invalid password', async ({page}) => {
        await page.goto('https://skleptest.pl/');
        await page.getByRole('link', {name: 'Account'}).click();
        await expect(page).toHaveURL('https://skleptest.pl/my-account/');
        await page.locator('#username').fill('admin')
        await page.locator('#password').fill('pass');
        await page.getByRole('button', {name: 'Login'}).click();
        const errorMsg = await page.locator('.woocommerce-error li');
        await expect(errorMsg).toContainText('Error: The password you entered for the username admin is incorrect. Lost your password?');
    });

    test('Lost password', async ({page}) => {
        await page.goto('https://skleptest.pl/');
        await page.getByRole('link', {name: 'Account'}).click();
        await page.getByRole('link', {name: 'Lost your password?'}).click();
        await page.locator('#user_login').fill('admin@gmail.com');
        await page.getByRole('button', {name: 'Reset password'}).click();
        const successMessage = await page.locator('.woocommerce-message');
        await expect(successMessage).toContainText('Password reset email has been sent.');
    });

    test('Main Page have title', async ({page}) => {
        await page.goto('https://skleptest.pl/');
        await expect(page).toHaveTitle('Generic Shop – Just another web shop');
        
    });

});

