# 11：条件に応じて処理を分岐する（if文）

## テストコード

```js
await page.goto('https://example.com/login');
const loginButton = await page.locator('button#login');

const isLoginRequired = await page.locator('div#login-message').isVisible();

if (isLoginRequired) {
    await loginButton.click();
    await page.locator('input#username').fill('testuser');
    await page.locator('input#password').fill('securepassword');
    await page.locator('button#submit').click();
}

await page.locator('div#profile').waitFor({ state: 'visible' });
```

### 問題

問１

上記のテストコードが行っている操作の流れを、日本語で説明してください。

問２

このテストコードで確認している観点（チェックポイント）は何でしょうか？

条件に応じて処理を分岐している箇所についても解説してください。

### 自分の回答

問１
1. Example.comのログイン画面を開示する
2. ログインボタンが表示されるまで待機する
3. ログインメッセージが表示されるまで待機する
4.  以下条件
- UserNameに「testuser」が入っている
- PassWordに「ecurepassword」が入っている
- Submit(大抵は「ログイン」）が押下されている
5. 条件が満たしていればプロフィール画面に遷移することを確認する

問２

ログイン情報(ユーザーネーム・パスワード)が正しく入力されており、ログインボタンを押下することでログインができることの確認

