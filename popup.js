document.addEventListener('DOMContentLoaded',function() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "");
  });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById("text").innerHTML = request.selection;
    copyToClipboard(request.selection) 
});

function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};
