import { test, expect } from '@playwright/test'
 

test.describe('Test shop' , () => {
    test.beforeEach( async ({page}) => {
        await page.goto('/');
        const siteTitle = await page.locator('a.site-title');
        await expect(siteTitle).toContainText('Generic Shop');
    });

    test('Go back to the main page', async ({page}) => {
          const shopNavButton = await page.locator("a[title='Shop']");
          await shopNavButton.click();
          await expect(page).toHaveURL('/');
    });

    test('Open Most Wanted category', async ({page}) => {
        await page.click('a[title="Most Wanted"]');
        await expect(page).toHaveURL('https://skleptest.pl/product-category/most-wanted/');
    });

    test('Test All Category nav button', async({page}) => {
        const categoriesNavButton = await page.locator("a[title='Catergries']");
        await categoriesNavButton.hover();
        const chosenCatery = await page.locator("a[title='All']");
        await chosenCatery.click();
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

