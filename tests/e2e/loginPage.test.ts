import { test, expect } from '@playwright/test';

import { getRandomString } from '../../utils/data-helpers';
import { LoginPage } from '../../pages/loginPage';
import { LostPasswordPage } from '../../pages/lostPasswordPage';

test.describe('Login page',  () => {
    let loginPage: LoginPage;
    let lostPasswordPage: LostPasswordPage;

    test.beforeEach( async ({page}) => {
        loginPage = new LoginPage(page);        
        loginPage.loadLoginPage();
          
    });

    test('Error when to try login through invalid password', async ({page}) => {
        const randomPassword = await getRandomString();
        await loginPage.usernameInput.fill('admin')
        await loginPage.passwordInput.fill(randomPassword);
        await loginPage.submitButton.click();
        await expect(loginPage.errorMessage)
        .toContainText('Error: The password you entered for the username admin is incorrect. Lost your password?');
    });

    test('Empty login form', async ({page}) => {
        loginPage.submitButton.click();
        await expect(loginPage.errorMessage)
        .toContainText('Error: Username is required.');
    }); 

    test('Empty password', async ({page}) => {
        loginPage.usernameInput.fill('admin');
        loginPage.submitButton.click();
        await expect(loginPage.errorMessage)
        .toContainText('Error: The password field is empty.');
    }); 
    
    test.only('Lost password', async ({page}) => {
        lostPasswordPage = new LostPasswordPage(page);

        await loginPage.lostPasswordButton.click();
        await lostPasswordPage.usernameInput.fill('admin@gmail.com');
        // await lostPasswordPage.usernameInput
        // .fill(lostPasswordPage.generateMail());
        
        // console.log(lostPasswordPage.generateMail());
        
        await lostPasswordPage.submitButton.click();
        await expect(lostPasswordPage.message).toContainText('Password reset email has been sent.');
    });

});