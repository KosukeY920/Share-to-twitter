chrome.browserAction.onClicked.addListener(function(tab) {
  genURL(tab);
});

chrome.contextMenus.create({
  title : "Share to twitter",
  contexts : ["all"],
  type : "normal",
  onclick : function(info, tab){
    genURL(tab);
  }
})

function genURL(tab){
  var template = 'https://twitter.com/intent/tweet?';
  var title = 'text=' + encodeURIComponent(tab.title);
  var url = '&url=' + encodeURIComponent(tab.url);
  console.log(template + title + url);
  window.open(template + title + url , 'newtab');
}
