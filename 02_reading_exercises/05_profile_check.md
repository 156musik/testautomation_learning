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

## 回答まとめ

### 自分の回答

問１

1. Example.comのregisterページを表示する
2. プルダウンメニューに「日本」があることを確認する
3. プルダウンメニューから国を選択する
4. 選択した国が日本であることを確認する

問２
プルダウンメニューから「日本」と言う選択肢が選択できるかの確認

### 回答

問1：このテストコードで行われている操作の流れ（日本語での説明）
1. https://example.com/login にアクセスし、ログイン画面を表示する
2. #username のテキストボックスに「testuser」と入力する
3. #password のテキストボックスに「securepass」と入力する
4. button[type="submit"]（ログインボタン）をクリックする
5. .profile というクラスを持つ要素が画面に現れるまで待つ（プロフィール画面が表示されたことを確認）
6. .profile .username 要素に表示されているテキスト（ユーザー名）を取得する
7. 取得したユーザー名が「testuser」であることを確認する

### 6と7の詳細

６．該当画面にプロフィールとユーザーネームが表示されていることを確認する

```js
await page.waitForSelector('.profile');
```
- .profileというCSSセレクタ（クラス）を持つ要素が出現するまで待つ。
- これはつまり、「プロフィール情報が表示された画面が現れたこと」を意味する。
   - F画面が切り替わって、ログイン後のプロフィール画面になったことを確認している操作。
 
７．ユーザーネームが「testuser」であることを確認する

```js
const username = await page.innerText('.profile .username');
expect(username).toBe('testuser');
```

- .profile .username というセレクタにあるテキスト要素を取得して username という変数に代入。
- その値が 'testuser' と一致するかをチェックしている。
- これは、ログイン後に表示されるユーザー情報が 正しいユーザーのもの（testuser）かどうか を検証する操作。

問2：テスト対象の観点
観点は以下の通りである：
「ログイン後に、正しいユーザー情報が画面上に表示されるかどうか」
もう少し具体的に書くと：
- 正常なユーザー名とパスワードでログインできるか
- ログイン後に、想定されたユーザー情報（ユーザー名）が画面に表示されるか

これらが E2E（エンド・ツー・エンド）テストとしての典型的な観点である。
