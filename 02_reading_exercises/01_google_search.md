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

## 回答まとめ

### 一行目

```ja
const { test, expect } = require('@playwright/test');

```

#### 自分の回答

これは「Googleのサイトに遷移する」操作でいいか

※1行目を`await page.goto('https://www.google.com');`と勘違いしていた

#### 解説

#### 日本語での説明：

この行は、Playwrightのテスト機能（test）と検証機能（expect）を使えるようにするための準備をしているコードである。
- `require('@playwright/test') `は、Playwrightのテストライブラリを読み込む命令。
- `{ test, expect } `は、その中の「テストを書く関数（test）」と「結果を確認する関数（expect）」だけを取り出して使えるようにしている。

#### つまりどういう意味？

このコードは「テストを書くための道具を用意している」と考えてOK。
画面操作そのものではなく、「これからテストコードを書きますよ」という宣言のようなもの。

#### イメージで例えると：

Playwrightは「Webブラウザを操作してテストするためのロボット」ですが、この行はそのロボットに命令を出せるリモコンを手元に準備している感じである。




このコードは「テストを書くための道具を用意している」と考えてOKです。
画面操作そのものではなく、「これからテストコードを書きますよ」という宣言のようなものです。



