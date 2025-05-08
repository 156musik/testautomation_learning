# 01：ログインフォームのテスト

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('ログインフォームに入力してログインボタンを押す', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'secret123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://example.com/dashboard');
});

await page.goto('https://example.com/login');
```

