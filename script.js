chrome.browserAction.onClicked.addListener(function(tab) {
  var template = 'https://twitter.com/intent/tweet?';
  var escaped_titile = encodeURIComponent(tab.title);
  var title = 'text=' + escaped_titile;
  var escaped_url = encodeURIComponent(tab.url);
  var url = '&url=' + escaped_url;
  console.log(template + title + url);
  window.open(template + title + url , 'newtab');
});

chrome.contextMenus.create({
  title : "Share to twitter",
  contexts : ["all"],
  type : "normal",
  onclick : function(info){
    chrome.tabs.getSelected(null, function(tabs){
      var template = 'https://twitter.com/intent/tweet?';
      var escaped_titile = encodeURIComponent(tabs.title);
      var title = 'text=' + escaped_titile;
      var escaped_url = encodeURIComponent(tabs.url);
      var url = '&url=' + escaped_url;
      console.log(template + title + url);
      window.open(template + title + url , 'newtab');
    });
  }
})

