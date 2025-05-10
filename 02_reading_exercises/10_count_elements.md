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

