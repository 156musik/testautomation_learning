# 09：モーダルの出現待ち

## テストコード

```js
test('要素が表示されるまで待つ', async ({ page }) => {
  await page.goto('https://example.com/loading');
  await page.click('#startLoad');
  await expect(page.locator('#loadedContent')).toBeVisible();
});
```


問１　上記のテストコードが行っている操作の流れを、日本語で説明してください。

問２　このテストコードで確認している観点（チェックポイント）は何でしょうか？




