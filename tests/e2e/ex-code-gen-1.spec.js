import { test, expect } from '@playwright/test';

test('Search google - Toyota Yaris ATIV', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('ค้นหา', { exact: true }).click();
  await page.getByLabel('ค้นหา', { exact: true }).fill('toyota yaris ativ 2023');
  await page.getByText('toyota yaris ativ 2023', { exact: true }).click();
  await page.pause()
  // await(5000)
});


test.only('YouTube - Search and open Bodyslam playlist', async ({ page }) => {
  // open YouTube web site
  await page.goto('https://www.youtube.com/');
  // search by text
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('BodySlam');
  // click button Search
  // await(5000)   // wait for button "Search" visible on page
  await page.pause()
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  // click first link for view VDO 
  // await page.pause()   // pause executing 
  /**
   * ===== Xpath ===== 
   * /ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div/div[3]/yt-formatted-string
   * ===============
   */
  await page.pause()
  await page.locator('xpath=//ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]');
  await page.locator('xpath=//ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]').click();
  await page.locator('xpath=//ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div').click();
});