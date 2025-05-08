# 03：カートへの追加

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

### 自分の回答

問1

1. Example.comのショップページに遷移する
2. 任意の商品の「カートに追加」ボタンを押す
3. カートに追加された商品の個数を数える
4. カートに1件商品が追加される

問2

テスト対象としてはカートに商品が追加できるか否かかと思う

### 回答

問1：操作の順番と内容
1. page.goto('https://example.com/shop')
   - example.comのショップページにアクセスする操作である。
2. page.click('button[data-testid="add-to-cart"]')
   - 商品の「カートに追加」ボタンをクリックする。 ※data-testid属性はテスト用に設定された識別子で、対象要素の特定に使われる。
3. const cartCount = await page.innerText('.cart-count')
   - カート内に表示されている商品数（カウント）を取得する。
4. expect(cartCount).toBe('1')
   - 取得したカウントが「1」であることを確認し、1件だけ商品が追加されたかを検証する。

問2：テスト対象
- カート機能の基本動作が対象。
- ユーザーが「カートに追加」ボタンを押したとき、本当に商品がカートに入るか、その結果がカウントとして画面に正しく反映されているかを確認している。

## 解説

```js
const cartCount = await page.innerText('.cart-count');
```

### コードの意味と動作

page.innerText(selector)
* これはPlaywrightのメソッドで、指定した要素内のテキストを取得する命令である。
* selectorの部分には、CSSセレクタを指定します。
* 取得されるのは、画面上に実際に表示されているテキストです（HTMLタグではなく、ユーザーに見える文字）。

### .cart-count について
* この部分は CSSセレクタで、.cart-count という クラス名がついた要素を指定している。
* つまり、ページ内にある下記のような要素から、「1」というテキストを取り出してくれるわけである。
```
 <div class="cart-count">1</div> 
```

### 結果の保存

```js
const cartCount = ...
```

* const を使って cartCount という変数に代入しています。
* この変数には、「カートの中に入っている商品の個数」が 文字列として 保存される。
* 例："1" や "2" といったテキスト。

この行でやっていることのまとめ
* カートのアイコンなどに表示されている「現在の商品の個数（テキスト）」を取得し、それを cartCount という変数に保存している。
* その後のテストコードで、この変数を使って期待値と比較している。

### 補足
innerTextとtextContentの違い
* innerText は、表示されているテキストのみを対象にし、スタイルの影響（非表示要素など）を受ける。
* textContent は、DOM上に存在するすべてのテキストを対象にするため、非表示のものも含む。
テストでは、通常は innerText を使った方が、ユーザーに見える内容を確認するのに適しているため、このコードでもそうなっている。

```js
await page.click('button[data-testid="add-to-cart"]');
```
ここで「1点アイテムを追加する操作」を実行している（= 商品を1つカートに追加する処理）

```js
const cartCount = await page.innerText('.cart-count');
```
ここは「何点追加されたかを画面から取得して確認する」ための処理。 

つまり、
* 「追加した」ではなく
* 「追加された結果として何点になったかを取得している」

結論として
* 追加する操作 → click()
* 追加されたかを確認する操作 → innerText() で表示を取得

