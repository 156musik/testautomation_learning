# 06：チェックボックス操作

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('利用規約の同意チェックボックスを操作する', async ({ page }) => {
  await page.goto('https://example.com/terms');
  await page.check('input[name="agree"]');
  await expect(page.locator('input[name="agree"]')).toBeChecked();
  await page.uncheck('input[name="agree"]');
  await expect(page.locator('input[name="agree"]')).not.toBeChecked();
});
```

## 回答まとめ

### 自分の回答

問１

１．Example.comサイトの利用規約ページに遷移する
２．「はい(agree)」にチェックを入れる
３．「はい(agree)」にチェックが入っていることを確認する
４．「はい(agree)」のチェックを外す
５．「はい(agree)」にチェックが入っていないことを確認する

問２
利用規約の「はい」にチェックを入れた後に外す操作を確認するケース

### 回答

問１

1. Example.comの利用規約（terms）ページに遷移する
2. 利用規約に同意するためのチェックボックス（agree）にチェックを入れる
3. チェックが入ったことを確認する
4. チェックを外す
5. チェックが外れたことを確認する

問２

特にこのテストの観点は、「チェックを付けたり外したりする操作が正しくできるか？」を確認しているので、
> 利用規約の「はい」にチェックを入れた後に外す操作を確認するケース

は正しい理解である

### 「await expect(page.locator」の補足解説

| コード                                   | 意味                                   |
| :------------------------------------ | :----------------------------------- |
| `page.locator('input[name="agree"]')` | ページ内の`agree`という名前のチェックボックスを探す        |
| `await expect(...).toBeChecked()`     | そのチェックボックスに「チェックが入っていること」を期待する（確認する） |
| `await expect(...).not.toBeChecked()` | 「チェックが入っていないこと」を期待する（確認する）           |

- .toBeChecked() ＝ チェックが付いていることを確認
- .not.toBeChecked() ＝ チェックが付いていないことを確認




