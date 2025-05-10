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
4. 以下条件
    - UserNameに「testuser」が入っている
    - PassWordに「ecurepassword」が入っている
    - Submit(大抵は「ログイン」）が押下されている
5. 条件が満たしていればプロフィール画面に遷移することを確認する

問２

ログイン情報(ユーザーネーム・パスワード)が正しく入力されており、ログインボタンを押下することでログインができることの確認

### 回答/解説

#### 問１

1. Example.comのログイン画面を開く
    - `await page.goto('https://example.com/login');`により、ログイン画面が表示される。
2. ログインボタンが表示されるまで待機
    - `const loginButton = await page.locator('button#login');`は、ログインボタンを取得し、そのボタンが画面に表示されるのを待っている。
3. ログインメッセージが表示されるまで待機
    - `const isLoginRequired = await page.locator('div#login-message').isVisible();`は、ログインが必要な場合に表示されるメッセージが表示されるまで待機します。
４. 条件に応じてログイン処理を行う
    - `if (isLoginRequired)`の部分で、もしログインが必要であれば、次の処理が実行される：
       - ユーザー名（`testuser`）を入力
       - パスワード（`securepassword`）を入力
       - ログインボタン（`submit`）をクリック
5. プロフィール画面への遷移を確認
    - 最後に、ログイン後にプロフィール画面が表示されることを確認する。`await page.locator('div#profile').waitFor({ state: 'visible' });`で、プロフィール画面が表示されるまで待機する。

#### 問２

**確認している観点（チェックポイント）**は以下の通りである：
- **ログインが必要かどうか**：`isVisible()` メソッドを使ってログインメッセージが表示されるかをチェックし、必要に応じてログイン処理を分岐させている。
- **正しい情報が入力されるか**：ユーザー名とパスワードがそれぞれ `testuser` と `securepassword` に設定され、ログインボタンが押下されることを確認している。
- **ログイン後の画面遷移**：ログイン処理が正常に行われた場合に、プロフィール画面が表示されるかを確認している。

このコードのポイントは、「ログインが必要な場合にのみログイン処理を行う」点にあり、条件によって動作を分岐している。

### 追加質問




