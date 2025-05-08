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

## 回答まとめ

問1：操作の順序と内容
1. page.goto('https://example.com/contact')
   → Example.com の お問い合わせ（Contact）ページを開く。
2. await page.fill('input[name="email"]', 'invalid-email')
　　→ email という名前の 入力欄に「invalid-email」（無効な形式のメールアドレス）を入力。 　※ @ やドメインが入っていないので、形式として不正。
3. await page.click('button[type="submit"]')
   → 送信ボタン（Submit）をクリック。 　※ 多くのフォームでは、<button type="submit">送信</button>のようになっている。
4. const error = await page.innerText('.error-message')
 　→ .error-message クラスのついた要素から、表示されている エラーメッセージのテキストを取得。
5. expect(error).toContain('無効なアドレスです。')
   → 取得したエラーメッセージが、「無効なアドレスです。」という文言を含んでいるかどうかを確認。

問2：テスト対象の確認
* テスト対象は、「メールアドレスのバリデーション（検証）機能」。
* ユーザーが無効なメールアドレスを入力して送信しようとしたときに、システムが正しくエラーを表示するかどうかを確認している。
* その結果として、「無効なアドレスです。」というメッセージが画面上に表示されていればOK。

### 補足ポイント
* innerText() と expect(...).toContain(...) のコンボは、「ある文字列が画面に含まれているか」を調べる定番のやり方です。
* toBe() と toContain() の違いも覚えておくと良い：
    * toBe('文字列') → 完全一致
    * toContain('文字列') → 一部一致OK


形式として正しいかどうか（例：invalid-emailが形式的に正しいか）」と「そのメールアドレスがシステムに登録されているか」は全く別の話である

```
await page.fill('input[name="email"]', 'invalid-email');
```

* これは 「形式エラー（例：@がない）」を検知する」 ためのテストです。
* 入力された値が "invalid-email" で、形式として不正な場合、画面上に「無効なアドレスです。」などと表示されます。

### 登録済みメールアドレスかどうかもチェックしたい場合
これは **「バックエンドとの連携で、存在確認（登録済かどうか）をする」**ような機能になります。
たとえば、登録済みでないアドレスを使って「ログイン」や「パスワード再設定」などをしようとしたときに、以下のようなエラーメッセージが表示されることがあります：
* 「このメールアドレスは登録されていません」
* 「ユーザーが見つかりませんでした」

```
await page.goto('https://example.com/password-reset');

await page.fill('input[name="email"]', 'notregistered@example.com');
await page.click('button[type="submit"]');

const error = await page.innerText('.error-message');
expect(error).toContain('このメールアドレスは登録されていません');
```

### ポイント
* フォーム自体はメールアドレスの形式をチェックしたうえで、
* サーバーに**実在チェック（登録済かどうか）**のリクエストを送り、
* 存在しない場合にエラーメッセージを返す。

## まとめ

- チェック内容：必要なテスト対象	Playwrightでの確認方法
- 形式チェック（@など）：フロントエンドのバリデーション	fill + click + innerText
- 登録済みチェック：バックエンド連携	同上（ただし内容がサーバー依存）
