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
//文字数がオーバーしそうなときは末尾を切り捨てる
function genURL(tab){
  let template = 'https://twitter.com/intent/tweet?';
  
  let strtmp = getLen(tab.title);
  let strLength = strtmp.length;
  let strArray = strtmp.strArray;
  if(strLength >= 257){
    var title = 'text=' + cutStr(tab.title, strArray, strLength);
  }else{
    var title = 'text=' + tab.title;
  }
  title = encodeURI(title);
  let url = '&url=' + tab.url;
  window.open(template + title + url , 'newtab');
}

//半角英数字を1文字
//それ以外の文字（全角英数字、日本語（半角カナを含む））を2文字
//とした時の文字列の長さを取得
//argument
//  str: Strings
//return:
//  length: Integer
//  strArray: Array
function getLen(str){
  let strArray = [];
  let length = 0;
  for(let i = 0; i <= str.length; i++){
    let chr = str.charCodeAt(i);
    if(chr >= 0x0 && chr < 0x81){
      length += 1;
      strArray[i] = 1;
    }else{
      length += 2;
      strArray[i] = 2;
    }
  }
  return {"length": length, "strArray": strArray};
}

//TwitterではURLを固定23文字とする仕様なので280 - 23 = 257
//よって257文字以内に収める
//argument
//  str: Strings
//  strArray: Array
//  strLength: Integer
//return:
//  -1: Error
//  str: Strings
function cutStr(str, strArray, strLength){
  for(let i = str.length; strLength >= 257; i--){
    if(strArray[i] == 1){
      str = str.slice(0, -1);
      strLength -= 1;
    }else if(strArray[i] == 2){
      str = str.slice(0, -1);
      strLength -= 2;
    }else{
      return -1;
    }
    console.log(strLength);
  }
  return str;
}
