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

#### 自分の回答

pagefullは「指定された入力欄に、文字を入力する命令」なのでusernameにtestuserを入力する

#### 解説

##### 第2問の正解

- 意味：`#username`という入力欄に`testuser`という文字を入力する
- セレクタ`#username`：
    - `＃`は「ID」を意味し、`username`は入力欄のID名
    - つまり、IDが`username`というHTML要素を指定している
- `fill()`は、指定した要素に指定した文字列を入力する関数

##### 日本語でまとめると：

> IDが`username`という入力欄に、文字列`testuser`を入力する操作である。

### 第３問

```ja
await page.click('button[type="submit"]');
```

#### 自分の回答

- submitというボタンを押す操作だと思う。この場合のsubmitってどんなボタンをを指しているのか。
- ログイン画面なのでログインボタンとかになると思うが、パスワードなどの入力の指示がないので、ログインボタンとは違うのか。

#### 解説

##### submitボタンについての解説

`submit`はHTMLのフォームを送信するためのボタンに使われるボタンタイプの一種である。
- **フォームの送信**（submit）を意味する
- ログイン画面などでは、ユーザー名とパスワードを入力した後に「ログイン」ボタンを押して情報を送信する。
- 通常、`<button type="submit">`と定義されたボタンが、ユーザーが入力した内容（ユーザー名やパスワードなど）をサーバーに送信する役割を持っている。

##### ここで重要な点：

- `submit`ボタンは実際のボタンの名前に関係なく、フォームを送信するボタンを指しています。
- ログイン画面では、パスワードを入力する欄がなくても、実際に「ログイン」ボタンは フォーム送信ボタン（`submit`）として機能しています。

##### 質問に対する回答：

- **ログインボタン**も、実際には「フォーム送信ボタン（`submit`）」と呼ばれるタイプのボタンであり、クリックするとユーザーが入力したデータ（例：ユーザー名、パスワード）をサーバーに送信します。
- このサンプルコードでは、パスワードの入力は前のコード行で入力されているので、実際にはこの`submit`ボタンを押すことでログイン処理が進みます。

##### 日本語でまとめると：

> `button[type="submit"]`は、ユーザーが入力した情報（ユーザー名、パスワードなど）を送信するためのボタンである。ログイン画面では、通常「ログインボタン」と呼ばれるボタンがこのタイプのボタンである。

### 第４問

```ja
await expect(page).toHaveURL('https://example.com/dashboard');
```

#### 自分の回答

ダッシュボード画面が表示されるみたいな感じか

#### 解説

##### 第4問の正解

- 意味：ページのURLが`https://example.com/dashboard`であることを確認する。
- 目的：ユーザーがログイン後、ダッシュボード画面に遷移したことを確認する
    - これが成功すれば、「ログインが成功してダッシュボードに遷移した」と判断できる。
- `expect()`と`toHaveURL()`は、Playwrightのアサーション（検証）関数で、ページの状態が期待通りであることを確認します。

#####  日本語でまとめると：

> ログイン後、`https://example.com/dashboard`というダッシュボード画面に遷移したかどうかを確認する操作である。
