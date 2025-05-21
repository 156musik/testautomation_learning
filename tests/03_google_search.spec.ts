import { test, expect } from '@playwright/test';

test('Google検索ができる', async ({ page }) => {
  await page.goto('https://www.google.com');

  // textarea を使うと成功する場合が多い
  await page.fill('textarea[name="q"]', 'Playwright');
  await page.keyboard.press('Enter');

  await page.waitForURL(/search/);
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('text=Playwright')).toBeVisible();
});