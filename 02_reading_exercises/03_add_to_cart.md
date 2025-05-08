# ０３：カートへの追加

## テストコード

'''js
const { test, expect } = require('@playwright/test');

test('商品をカートに追加する', async ({ page }) => {
  await page.goto('https://example.com/shop'); // 商品ページに移動
  await page.click('button[data-testid="add-to-cart"]'); // 商品をカートに追加
  const cartCount = await page.innerText('.cart-count'); // カート内のアイテム数を取得
  await expect(cartCount).toBe('1'); // カートに1つの商品が追加されたことを確認
});
'''

