import { test, expect } from '@playwright/test';

test('Search google - Toyota Yaris ATIV', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('ค้นหา', { exact: true }).click();
  await page.getByLabel('ค้นหา', { exact: true }).fill('toyota yaris ativ 2023');
  await page.getByText('toyota yaris ativ 2023', { exact: true }).click();
  await page.getAttribute
//   await page.getByRole('link', { name: 'All New Toyota Yaris Ativ - สะดวกสบายด้วยกล้องมองรอบคัน' }).click();
});

// test('test', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     await page.getByLabel('ค้นหา', { exact: true }).click();
//     await page.getByLabel('ค้นหา', { exact: true }).fill('toyota yaris ativ 2023');
//     await page.getByText('toyota yaris ativ 2023', { exact: true }).click();
//     await page.getByRole('link', { name: 'All New Toyota Yaris Ativ - สะดวกสบายด้วยกล้องมองรอบคัน toyota.co.th https://www.toyota.co.th' }).click();
//   });