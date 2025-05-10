# JavaScriptについて

Playwrightをやる上でJavaScriptも学んでおいた方がいいのかについてのやり取りをまとめた。

※但し、現時点ではまだ初学段階のため、取り掛かってはいない。

## 理由

- Playwrightの公式ドキュメントやサンプルコードはJavaScript/TypeScript中心で記載されている。
- PlaywrightのテストコードはNode.jsベースで動くため、非同期処理（`async/await`）やモジュールの書き方など、JavaScriptの基本文法がわかっていると理解が早くなる。
- エラーの原因調査やデバッグの効率も、JavaScriptに慣れていれば格段に上がる。
- 将来的にTypeScriptやフレームワーク（Next.jsなど）と組み合わせる自動化にも対応しやすくなる。

ただし、
「テストコードを写経して動かすだけの初学段階」なら、最低限の文法（関数、変数、`async/await`、条件分岐など）でも大丈夫である。

## 参照する予定の書籍

[スラスラ読める JavaScriptふりがなプログラミング 増補改訂版](https://book.impress.co.jp/books/1122101025)

---
以下こちらの書籍を参照してPlaywrightの読解とうまく結びつける方帆を教えてもらった

---

## Playwrightのコードを「ふりがなプログラミング」方式で分解する

- 書籍のスタイルに倣って、Playwrightのコードも行ごとに意味を書き添えていく。

```js
const { test, expect } = require('@playwright/test'); // testとexpect関数を読み込む
test('basic test', async ({ page }) => {              // 'basic test'というテストを定義
  await page.goto('https://example.com');            // ページを開く
  const title = await page.title();                  // ページのタイトルを取得
  expect(title).toBe('Example Domain');              // タイトルが正しいことを確認
});
```
## 本の内容とPlaywrightの要素を対応させる

| 書籍の内容  | 対応するPlaywrightの概念・活用例                                       |
| ----- | ----------------------------------------------------------- |
| 変数と関数 | `const browser = await chromium.launch()` など変数代入や関数の呼び出し    |
| 条件分岐  | テスト中に条件ごとの処理分岐が必要な場面（例：`if (await page.isVisible(...)) {}`） |
| ループ   | 複数要素の繰り返し操作（例：`for (const link of links)`）                  |
| 関数    | 複数の処理をまとめる関数の活用（例：ログイン処理の関数化）                               |
| DOM操作 | `page.locator('button').click()` のような要素操作                   |
| 非同期処理 | `async/await` を使った待機処理（Playwrightの基本）                       |

## Playwrightで詰まったら、「ふりがな本」に戻って確認する

- たとえば`for (const el of elements)`でよくわからない場合は、書籍の繰り返し文の章で再確認する。
- 非同期の仕組みや`await`の意味が怪しければ、本の後半で補完する。

## 簡単なPlaywrightのテストを自分で分解・再構築してみる

- 書籍の練習コードのように、Playwrightのテストを「自分で書き直す」ことが理解を深める近道。
- たとえば、`goto → title取得 → expect`の一連を、別のサイトで試す。

---

以下、参照コードなどを作成してもらった

---

## Playwright テストコード（ふりがな付き）

```js
const { test, expect } = require('@playwright/test'); 
// Playwrightから「test」と「expect」という関数を読み込む

test('basic test', async ({ page }) => { 
// 「basic test」という名前のテストを定義する
// 非同期処理を行うため async を使う
// page はブラウザのタブのようなもの

  await page.goto('https://example.com'); 
  // 指定したURL（https://example.com）にアクセスする

  const title = await page.title(); 
  // ページのタイトルを取得して、変数 title に入れる

  expect(title).toBe('Example Domain'); 
  // title の値が "Example Domain" と一致するかどうかをチェックする

});
```

## 解説テンプレート：Playwrightコードを書くときのふりがなパターン

| コード構文                                          | ふりがなの例                    |
| ---------------------------------------------- | ------------------------- |
| `const x = y;`                                 | 変数 `x` に `y` を代入する        |
| `await page.goto(URL);`                        | 指定したURLにアクセスする（待機が必要）     |
| `await page.locator('セレクタ').click();`          | 指定した要素をクリックする             |
| `const text = await page.textContent('セレクタ');` | 要素の中のテキストを取得して変数に入れる      |
| `expect(x).toBe(y);`                           | `x` の値が `y` と同じであることを確認する |

## 使い方の例（練習用）

Playwrightのコードを読んだら、自分でこんな風にふりがなをつけて整理してみてください：

```js
await page.fill('input[name="username"]', 'user1'); 
// ユーザー名の入力欄に 'user1' を入力する

await page.click('button[type="submit"]'); 
// 送信ボタンをクリックする

const url = page.url(); 
// 現在のURLを取得する
```

---







