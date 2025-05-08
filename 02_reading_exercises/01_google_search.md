# 01：Googleで検索して結果を確認する

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('Googleで検索して結果を確認する', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  await expect(page).toHaveTitle(/Playwright/);
});
```

