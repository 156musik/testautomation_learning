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

## 手順

1. Googleのトップページにアクセスする
2. 検索ボックスに「Playwright」と入力
3. Enterキーで検索を実行
4. 検索結果の表示まで少し待機
5. ページタイトルに「Playwright」が含まれていることを確認

## テスト観点

検索が正しく実行され、結果画面に遷移できているか
