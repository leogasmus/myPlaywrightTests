import { Locator, expect, Page, } from '@playwright/test'

export class HomePage {
    readonly siteTitle: Locator;
    readonly page: Page;
    readonly shopNavButton: Locator;
    readonly mostWantedCategory: Locator;
    readonly categoriesNavButton: Locator;
    readonly allCateroiesNavButton: Locator;
    readonly mainSlider: Locator;

    constructor( page: Page) {
        this.page = page,
        this.siteTitle = page.locator('a.site-title');
        this.shopNavButton = page.locator("a[title='Shop']");
        this.mostWantedCategory = page.locator('a[title="Most Wanted"]');
        this.categoriesNavButton = page.locator("a[title='Catergries']");
        this.allCateroiesNavButton = page.locator("a[title='All']");
        this.mainSlider = page.locator('.main-slider')
    };

    async loadHomePage() {
        await this.page.goto('/');
        await expect(this.siteTitle).toContainText('Generic Shop');
    };
};