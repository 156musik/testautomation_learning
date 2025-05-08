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

## 解説

```js
await page.goto('https://example.com/login');
```

- 意味：ブラウザで https://example.com/login にアクセスする
- 目的：ログイン画面を表示する
- await を使っていることで「ページの読み込みが完了するまで待つ

```js
await page.fill('#username', 'testuser');
```

- 意味：#username という入力欄に testuser という文字を入力する
- セレクタ #username：
    - ＃は「ID」を意味し、username は入力欄のID名
    - つまり、IDが username というHTML要素を指定している
- fill() は、指定した要素に指定した文字列を入力する関数

```js
await page.click('button[type="submit"]');
```

submit はHTMLのフォームを送信するためのボタンに使われるボタンタイプの一種です。
- フォームの送信（submit）を意味する
- ログイン画面などでは、ユーザー名とパスワードを入力した後に「ログイン」ボタンを押して情報を送信します。
- 通常、<button type="submit"> と定義されたボタンが、ユーザーが入力した内容（ユーザー名やパスワードなど）をサーバーに送信する役割を持っています。

- submit ボタンは実際のボタンの名前に関係なく、フォームを送信するボタンを指しています。
- ログイン画面では、パスワードを入力する欄がなくても、実際に「ログイン」ボタンは フォーム送信ボタン（submit）として機能しています。

- ログインボタンも、実際には「フォーム送信ボタン（submit）」と呼ばれるタイプのボタンであり、クリックするとユーザーが入力したデータ（例：ユーザー名、パスワード）をサーバーに送信します。
- このサンプルコードでは、パスワードの入力は前のコード行で入力されているので、実際にはこのsubmitボタンを押すことでログイン処理が進みます。

```js
await expect(page).toHaveURL('https://example.com/dashboard');
```

- 意味：ページのURLが https://example.com/dashboard であることを確認する。
- 目的：ユーザーがログイン後、ダッシュボード画面に遷移したことを確認する
    - これが成功すれば、「ログインが成功してダッシュボードに遷移した」と判断できる。
- expect() と toHaveURL() は、Playwrightのアサーション（検証）関数で、ページの状態が期待通りであることを確認します。
