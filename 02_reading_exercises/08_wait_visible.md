# 08：要素が表示されるまで待つ

## テストコード

```js
await page.goto('https://example.com/loading');
await page.click('button#startLoad');
await page.waitForSelector('div#loadedContent', { state: 'visible' });
await expect(page.locator('div#loadedContent')).toBeVisible();
```

### 問題

問１　次の手順を実装しているコードである。正しい手順を答えなさい。

問２　このコードでテストしている観点を簡潔に答えなさい。

### 自刎の回答

問１
1. Example.comサイトのローディング画面に遷移する
2. 「ロードする(starload)」ボタンを押下する
3, ローディングが完了し、画面が切り替わるまで待つ
4. ローディングが完了し、画面が切り替わったことを確認する

問２

※途中送信してしまったので回答できず

### 回答/解説

問1
1.Example.comサイトのローディング画面に遷移する
2.「ロードする (startLoad)」ボタンを押下する
3. ローディング完了後、新しいコンテンツ（loadedContent）が表示されるまで待つ
4. loadedContentが表示されていることを確認する

3と4をまとめて書いてもOK

問2 ※解答例

観点：ローディング操作後に、指定した要素（loadedContent）が正しく表示されるかを確認する。

### ポイント

page.goto('https://example.com/loading')
　→ ローディング画面へ移動

- page.click('button#startLoad')
　 - ロードを開始するボタンをクリック
- page.waitForSelector('div#loadedContent', { state: 'visible' })
　- 指定された要素（div#loadedContent）が表示状態になるまで待つ
- expect(page.locator('div#loadedContent')).toBeVisible()
　- 要素がちゃんと表示されているかを検証

