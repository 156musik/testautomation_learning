import { test, expect } from '@playwright/test';

test('Google検索ができる（猫の画像）', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', '猫の画像');
  await page.press('input[name="q"]', 'Enter');
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('text=猫の画像')).toBeVisible(); // ✅アサート一致
});
