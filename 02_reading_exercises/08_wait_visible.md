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

### 自分の回答

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
   - ロード（読み込み）が完了したあとには**次の画面にコンテンツが表示される**パターンが多いので、自然な流れである

3と4をまとめて書いてもOK

問2 ※解答例

観点：ローディング操作後に、指定した要素（loadedContent）が正しく表示されるかを確認する。

### ポイント

- page.goto('https://example.com/loading')
   - ローディング画面へ移動
- page.click('button#startLoad')
   - ロードを開始するボタンをクリック
- page.waitForSelector('div#loadedContent', { state: 'visible' })
   - 指定された要素（div#loadedContent）が表示状態になるまで待つ
- expect(page.locator('div#loadedContent')).toBeVisible()
   - 要素がちゃんと表示されているかを検証

### 追加質問１

- 「loadedContent」は３の解答で書かれている通り、新しいコンテンツという意味か
   - 「ローディング」ボタンを押すという２の手順から、通常は画面が更新されることが多いのではと思うが
 
### 追加質問１の解説

「lloadedContent」とは？

このコードに出てくる div#loadedContent は、**ローディングが完了したあとに表示される新しいコンテンツ**を指している。

つまり、
- ロードボタンを押すまでは存在しない（もしくは非表示）だった
- ロードボタンを押すと「loadedContent」という新しい部分が出現する

という想定の動きになっています。

「ローディングボタン押下→画面が更新」の流れについて

- ローディング系のボタン（例：「データを読み込む」ボタン）を押す
- 「サーバーからデータを取得したり、内部で何か処理をして…
- 「完了後に、新しい情報やページの一部が更新される

この流れが一般的なので、**画面が更新（切り替わる）ことを確認する**という表現が一番自然で正確である。

### 追加質問1のまとめ

- loadedContentは、ロード完了後に出現する新しいコンテンツ。
- 「画面が切り替わったか確認する」という表現が非常に適切。

### 追加質問２

「要素が表示されるまで待つ」ということなので、モーダルが表示されたりするなどにも使えるコードか

### 追加質問２の解説

「要素が表示されるまで待つ」というのは
- ページのロード後に表示されるモーダルウィンドウ
- ポップアップ通知
- 画面の一部更新で後から出てくるエラーメッセージ
- Ajaxで動的に読み込まれるリストやテーブル

など、最初は存在していなかったり、非表示だった要素があとから現れる場面にぴったり使える技術である

具体例：「モーダルウィンドウ」の場合
たとえば、こういう流れでも使えます。
1. ページにアクセスする
2. 「ログイン」ボタンを押す
3. ログイン用モーダルウィンドウが表示される
4. モーダル内の「ユーザー名」入力フィールドが表示されるまで待つ

この「モーダルが開く→中身の要素が出てくる」まで待ちたいときに
>await expect(page.locator('セレクタ')).toBeVisible();

が役立つ

### 追加質問２のまとめ

- モーダルの表示待ちにも使える
- 動的に出現する要素全般に対応できる
- サイトの動きに追従して、正しくテストを待つための基本中の基本の技術
