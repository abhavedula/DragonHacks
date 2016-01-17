function getKey(text) {
  var apikey = "c6e9079c85789eaf788aec678392451526d985f3";
  var xhr = new XMLHttpRequest();

  var apiCall = "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedTaxonomy?apikey=";
  var maxRetrieve = "3";
  xhr.open("GET", apiCall + apikey + "&text=" + text.replace(" ","%20") + "&maxRetrieve=" + maxRetrieve, false);
  xhr.send();

  var apiResult = xhr.responseXML;
  var parse = apiResult.getElementsByTagName("label");
  var key = parse[0].textContent.split("/");
  // only take one word
  return key[key.length-1];
}

function giphy(key) {
  var apikey = "dc6zaTOxFJmzC";
  var xhr = new XMLHttpRequest();
  var lim = 1;
  var fmt = "json";

  var apiCall = "http://api.giphy.com/v1/gifs/search?q=";
  
  xhr.open("GET", apiCall  + key + "&api_key=" + apikey + "&limit=" + lim + "&fmt=" + fmt, false);
  document.write(xhr.statusText);
  xhr.send();
  var gif = JSON.parse(xhr.responseText);
  var gifURL = gif.data[0].images.fixed_height.url;
  return gifURL;
}

function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}

document.addEventListener('DOMContentLoaded',function() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "");
  });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById("text").innerHTML = "stuff";
    var key = getKey(request.selection);
    var url = giphy(key);
    // document.getElementById("text").innerHTML = url;
    copyToClipboard(url);
});
