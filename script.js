//拡張機能のアイコンをクリックしたとき
chrome.browserAction.onClicked.addListener(function(tab) {
  genURL(tab);
});

//コンテキストメニューを表示したとき
chrome.contextMenus.create({
  title : "Share to twitter",
  contexts : ["all"],
  type : "normal",
  onclick : function(info, tab){
    genURL(tab);
  }
})

//Twitter共有ページURLを生成
//文字数がオーバーしそうなときは末尾を切り捨てて"..."を追加する
//日本語と半角英数字が混ざるタイトルで文字数がオーバーするとバグる、改善が必要
function genURL(tab){
  var template = 'https://twitter.com/intent/tweet?';
  
  if(getLen(tab.title) >= 257){
    var title = 'text=' + tab.title.substring(0, 126) + '...';
  }else{
    var title = 'text=' + tab.title
  }
  title = encodeURI(title);
  var url = '&url=' + tab.url;
  window.open(template + title + url , 'newtab');
}

//半角英数字を1文字
//それ以外の文字（全角英数字、日本語（半角カナを含む））を2文字
//とした時の文字列の長さを取得
function getLen(str){
  var result = 0;
  for(var i = 0; i <= str.length; i++){
    var chr = str.charCodeAt(i);
    if(chr >= 0x0 && chr < 0x81){
      result += 1;
    }else{
      result += 2;
    }
  }
  return result;
}
