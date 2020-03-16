# Share-to-twitter
GoogleChromeにおいて、簡単にTwitterへリンクを共有できる拡張機能

## How to use
共有したいページでブラウザ右上のアイコンをクリック。または、右クリックメニューから拡張機能をクリック。
これで現在開いているページのタイトル、URLが入力されたTwitter共有ページが表示される。

![つかいかた](https://raw.githubusercontent.com/KosukeY920/Share-to-twitter/images/Howto.gif)

## File list
- manifest.json
    > マニフェストファイル　
- scripts.js
    > 共有URL生成
- content.js
    > タブを閉じる
## How to install
やる気があればChromeウェブストアにアップする予定
今のところは
1. このレポジトリをZIPでDL
2. 任意の位置に解凍
3. <chrome://extensions/>へアクセスし、「パッケージ化されていない拡張機能を読み込む」からフォルダごと選択する
4. これで右クリックメニューとブラウザ右上にアイコンが表示されるはず
## TODO
拡張機能のアイコン
文字列を選択して拡張機能を起動すると、選択した文字列を引用する機能
