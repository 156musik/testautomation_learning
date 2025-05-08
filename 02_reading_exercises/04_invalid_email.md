# 04：不正なメールアドレスのバリデーション

## テストコード


```js
const { test, expect } = require('@playwright/test');

test('不正なメールアドレスでフォームを送信する', async ({ page }) => {
  await page.goto('https://example.com/contact'); // 問い合わせフォームに移動
  await page.fill('#email', 'invalid-email'); // 不正なメールアドレスを入力
  await page.click('button[type="submit"]'); // 送信ボタンをクリック
  const errorMessage = await page.innerText('.error-message'); // エラーメッセージを取得
  await expect(errorMessage).toBe('無効なメールアドレスです。'); // エラーメッセージが表示されることを確認
});
```

