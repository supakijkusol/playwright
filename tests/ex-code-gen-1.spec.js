import { test, expect } from '@playwright/test';

// test('Search google - Toyota Yaris ATIV', async ({ page }) => {
//   await page.goto('https://www.google.com/');
//   await page.getByLabel('ค้นหา', { exact: true }).click();
//   await page.getByLabel('ค้นหา', { exact: true }).fill('toyota yaris ativ 2023');
//   await page.getByText('toyota yaris ativ 2023', { exact: true }).click();
//   await(5000)
// });


test('YouTube - Search and open Bodyslam playlist', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('BodySlam');
  // await(3000)
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  // await(5000)
  // await page.pause()
  // /ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div/div[3]/yt-formatted-string
  await page.locator('xpath=//ytd-app/div[1]/ytd-page-manager/ytd-search/div[1]').click();
  await page.locator('xpath=//ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]').click();
  await page.locator('xpath=//ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/div').click();
});