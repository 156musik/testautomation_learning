# 07：ラジオボタンを選択する

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('ラジオボタンを選択するテスト', async ({ page }) => {
  await page.goto('https://example.com/survey');
  await page.check('input[name="gender"][value="female"]');
  await expect(page.locator('input[name="gender"][value="female"]')).toBeChecked();
});
```

