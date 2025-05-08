# 05：ログイン後プロフィール確認

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('ログイン後にプロフィールを確認する', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'securepass');
  await page.click('button[type="submit"]');
  await page.waitForSelector('.profile');
  const username = await page.innerText('.profile .username');
  expect(username).toBe('testuser');
});
```
