chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    chrome.runtime.sendMessage({selection: window.getSelection().toString()});

});