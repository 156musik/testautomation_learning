# 01：Google検索ができる

## テストコード

```js
import { test, expect } from '@playwright/test';

test('Google検索ができる', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('text=Playwright')).toBeVisible();
});
```

##　手順まとめ

1. `tests`フォルダを作る
2. `.spec.ts`ファイルを追加
3. ChatGPTにテストコードを作成してもらい、（コピペOK）
4. ファイルの保存を行う
5. 実行を行う
```js
npx playwright test
```

※手順１はファイルがある場合は省略可

##　判明したこと

自分の使用端末が`macOS Monterey`までしかサポートしていないこともあり、下記エラーが表示された
```js
Protocol error (Page.overrideSetting): Unknown setting: FixedBackgroundsPaintRelativeToDocument
```

- macOSのバージョンが古いため、PlaywrightがインストールしたWebKitブラウザ（最新版）が動作に必要な機能をOSがサポートしていない。
- Playwright側のバージョンやブラウザのビルドが現在の環境に合っていない。
が原因だった。

そのため、`WebKitテストだけスキップする`方法を取った

最初は`playwright.config.ts`に該当コードを追加する形を取ったが、一部だけを変えるのが難しかったため、下記の全文を用意してもらい、上書き保存した。

```js
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // webkitはコメントアウト or 削除
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
```
これで、実行を行うとパスされた。


