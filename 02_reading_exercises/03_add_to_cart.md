# ０３：カートへの追加

## テストコード

```js
const { test, expect } = require('@playwright/test');

test('商品をカートに追加する', async ({ page }) => {
  await page.goto('https://example.com/shop'); // 商品ページに移動
  await page.click('button[data-testid="add-to-cart"]'); // 商品をカートに追加
  const cartCount = await page.innerText('.cart-count'); // カート内のアイテム数を取得
  await expect(cartCount).toBe('1'); // カートに1つの商品が追加されたことを確認
});
```

## 回答まとめ

問い1：操作の順番と内容
1. page.goto('https://example.com/shop')  → example.comのショップページにアクセスする操作である。
2. page.click('button[data-testid="add-to-cart"]') → 商品の「カートに追加」ボタンをクリックする。 ※data-testid属性はテスト用に設定された識別子で、対象要素の特定に使われる。
3. const cartCount = await page.innerText('.cart-count') → カート内に表示されている商品数（カウント）を取得する。
4. expect(cartCount).toBe('1') → 取得したカウントが「1」であることを確認し、1件だけ商品が追加されたかを検証する。

問い2：テスト対象
* カート機能の基本動作が対象。
* ユーザーが「カートに追加」ボタンを押したとき、本当に商品がカートに入るか、その結果がカウントとして画面に正しく反映されているかを確認している。

## 解説

```js
const cartCount = await page.innerText('.cart-count');
```

コードの意味と動作

page.innerText(selector)
* これはPlaywrightのメソッドで、指定した要素内のテキストを取得する命令です。
* selectorの部分には、CSSセレクタを指定します。
* 取得されるのは、画面上に実際に表示されているテキストです（HTMLタグではなく、ユーザーに見える文字）。
