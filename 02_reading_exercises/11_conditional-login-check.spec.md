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

