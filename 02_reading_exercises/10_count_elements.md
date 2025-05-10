# 10：要素の数をカウントする

## テストコード

```js
import { test, expect } from '@playwright/test';

test('商品が1つ以上表示されていることを確認する', async ({ page }) => {
  await page.goto('https://example.com/items');
  const itemCount = await page.locator('.item').count();
  console.log(`表示されている商品数: ${itemCount}`);
  expect(itemCount).toBeGreaterThan(0);
});
```

### 問題

問１

上記のテストコードが行っている操作の流れを、日本語で説明してください。

問２

このテストコードで確認している観点（チェックポイント）は何でしょうか？

### 自分の回答

問１
1. Example.comサイトの商品ページ(items)に遷移する
2. 該当画面に表示されている商品数のカウントを行う
3. カウントが完了したことを確認する
4, 該当がめんに表示されている商品数の数を確認する

問２

該当画面の商品数の数が計算され、件数が正しいことの確認


