# Share-to-twitter
GoogleChromeにおいて、簡単にTwitterへリンクを共有できる拡張機能

## 使い方
共有したいページでブラウザ右上のアイコンをクリック。または、右クリックメニューから拡張機能をクリック。
これで現在開いているページのタイトル、URLが入力されたTwitter共有ページが表示される。

![つかいかた](https://raw.githubusercontent.com/KosukeY920/Share-to-twitter/images/Howto.gif)

## ファイルリスト
- manifest.json
    > マニフェストファイル　
- scripts.js
    > 共有URL生成
- content.js
    > タブを閉じる
## インストール方法
1. [こちら](https://github.com/KosukeY920/Share-to-twitter/releases)のリリースページから`Share-to-twitter_v0.x.zip
`をダウンロード
2. 任意の位置に解凍
3. <chrome://extensions/>へアクセスし、「パッケージ化されていない拡張機能を読み込む」からフォルダごと選択
4. これで右クリックメニューとブラウザ右上に拡張機能が表示される

※やる気があればChromeウェブストアにアップする予定

## TODO
- [x] 拡張機能のアイコン
- [ ] 文字列を選択して拡張機能を起動すると、選択した文字列を引用する機能

## アイコン出典
アイコンに使用した画像は[ICOON MONO](https://icooon-mono.com/ "ICOON MONO")様よりお借りしました。