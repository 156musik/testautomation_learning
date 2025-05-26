import { test, expect } from '@playwright/test';

test('Google検索ができる（テスト自動化 ツール）', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'テスト自動化 ツール');   // ← ① 検索語
  await page.press('input[name="q"]', 'Enter');
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('text=テスト自動化 ツール')).toBeVisible(); // ← ② アサーション
});