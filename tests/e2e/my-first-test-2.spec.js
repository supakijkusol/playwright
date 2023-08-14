const {test, expect} = require('@playwright/test')      // require() is a node js build-in function used to load modules present in separate files. Here we are loading "test" and "expect" modules from playwright package


test('Search google', async ({page}) =>{
    await page.goto('https://www.google.com/')
    // await(5000)
    expect(page).toHaveTitle('Google')
    await page.getByLabel('ค้นหา', { exact: true }).click();
    await page.getByLabel('ค้นหา', { exact: true }).fill('toyota yaris ativ 2023');
    await page.getByText('toyota yaris ativ 2023', { exact: true }).click();
    await page.pause();
    // expect(page).toHaveURL('http://schema.org/WebPage')
    // await browser.close();
})
