import { test, expect } from '@playwright/test';

import { getRandomString } from '../../utils/data-helpers';

test.describe('Login page',  () => {

    test.beforeEach( async ({page}) => {
        await page.goto('/my-account/');
        const pageTitle = await page.locator('.page-title');
        await expect(pageTitle).toContainText('My account');
          
    });

    test('Error when to try login through invalid password', async ({page}) => {
        const randomPassword = await getRandomString();
        await page.locator('#username').fill('admin')
        await page.locator('#password').fill(randomPassword);
        await page.getByRole('button', {name: 'Login'}).click();
        const errorMsg = await page.locator('.woocommerce-error li');
        await expect(errorMsg).toContainText('Error: The password you entered for the username admin is incorrect. Lost your password?');
    });

    test('Empty login form', async ({page}) => {
        await page.getByRole('button', {name: 'Login'}).click();
        const errorMsg = await page.locator('.woocommerce-error li');
        await expect(errorMsg).toContainText('Error: Username is required.');
    }); 

    test('Empty password', async ({page}) => {
        await page.locator('#username').fill('admin')
        await page.getByRole('button', {name: 'Login'}).click();
        const errorMsg = await page.locator('.woocommerce-error li');
        await expect(errorMsg).toContainText('Error: The password field is empty.');
    }); 
    
    test('Lost password', async ({page}) => {
        await page.getByRole('link', {name: 'Lost your password?'}).click();
        await page.locator('#user_login').fill('admin@gmail.com');
        await page.getByRole('button', {name: 'Reset password'}).click();
        const successMessage = await page.locator('.woocommerce-message');
        await expect(successMessage).toContainText('Password reset email has been sent.');
    });

});