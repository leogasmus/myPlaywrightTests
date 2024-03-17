import test, {expect } from '@playwright/test';
import ComparePdf from 'compare-pdf';


test('Generate pdf', async ({page}) => {
    await page.goto('https://en.wikipedia.org/wiki/PDF');
    await page.pdf({path: 'page.pdf'});
});

test('Compare PDF', async ({page}) => {
   const comparationResult = await new ComparePdf()
   .actualPdfFile('actual.pdf')
   .baselinePdfFile('baseline.pdf')
   .compare();

   console.log(comparationResult);
});