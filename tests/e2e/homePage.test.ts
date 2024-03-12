import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/homePage';

 
test.describe('Test shop' , () => {
    let homePage: HomePage;

    test.beforeEach( async ({page}) => {
        homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('Go back to the main page', async ({page}) => {
          await homePage.shopNavButton.click();
          await expect(page).toHaveURL('/');
    });

    test('Open Most Wanted category', async ({page}) => {
        await homePage.mostWantedCategory.click();
        await expect(page).toHaveURL('/product-category/most-wanted/');
    });

    test('Test All Category nav button', async({page}) => {
        await homePage.categoriesNavButton.hover();
        await homePage.allCateroiesNavButton.click();
        await expect(page).toHaveURL('/shop/');
    });

    const categories = [
        "Shirts", 
        "Featured", 
        "Trends", 
        "Scarfs", 
        "Shoes", 
        "Tops", 
        "Blouse", 
        "Jeans",
        "Dresses",
    ];
    for (const category of categories) {
        test(`Test ${category} nav button`, async({page}) => {
            const categoriesNavButton = await page.locator("a[title='Catergries']");
            await categoriesNavButton.hover();
            const chosenCatery = await page.locator(`a[title='${category}']`);
            await chosenCatery.click();
            await expect(page)
            .toHaveURL(`/product-category/${category.toLocaleLowerCase()}/`);
        });
    }


});

