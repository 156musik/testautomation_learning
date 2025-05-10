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

## 回答まとめ

### 第1問

```ja
await page.goto('https://example.com/login');
```

#### 自分の回答

- URLに「example.com」とあるので、Example.comというサイトがある
- そのログインページを開示する

という操作になると思う。

#### 解説

##### 第1問の正解

- 意味：ブラウザで`https://example.com/login`にアクセスする
- 目的：ログイン画面を表示する
- await を使っていることで「ページの読み込みが完了するまで待つ」

##### 日本語でまとめると：

> 「example.comのログインページを開く（ページが読み込まれるまで待つ）」操作である。

### 第2問

```ja
await page.fill('#username', 'testuser');
```







