import { test, expect } from '@playwright/test'

import { HomePage } from '../../pages/homePage';

 
test.describe('Visual HomePage Test' , () => {
    let homePage: HomePage;

    test.beforeEach( async ({page}) => {
        homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('HomePage screenshot', async ({page}) => {
        const pageScreenshot = await page.screenshot();
        expect(pageScreenshot).toMatchSnapshot('home-page.png');
    });

    test('HomePage main slider', async ({page}) => {
        const mainSliderScreenshot = await homePage.mainSlider.screenshot();
        expect(mainSliderScreenshot).toMatchSnapshot('main-slider.png');
    });

    test('HomePage withou the main slider', async ({page}) => {
        const pageWithoutMainSlider = await page.screenshot({mask: [homePage.mainSlider]});
        expect(pageWithoutMainSlider).toMatchSnapshot('home-page-without-slider.png');
    });

});

