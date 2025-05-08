# 02：ログインフォームのテスト

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
```

```js
await page.goto('https://example.com/login');
```

- 意味：ブラウザで https://example.com/login にアクセスする
- 目的：ログイン画面を表示する
- await を使っていることで「ページの読み込みが完了するまで待つ
