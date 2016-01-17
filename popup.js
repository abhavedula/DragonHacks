

var text;
var keyLen;

document.addEventListener('DOMContentLoaded',function() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "");
  });

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //document.getElementById("text").innerHTML = request.selection;
    //copyToClipboard(request.selection);
    document.getElementById("text").innerHTML = "No gif was found";
    text = request.selection;
    var key = getURL(text);
    // not executed if no gif
    var gif = giphy(key);
    copyToClipboard(gif);
    
});

function copyToClipboard(text) {
	document.write("Gif url has been copied to your clipboard!");
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);

};


function getURL(text, i) {
	var apikey = "c6e9079c85789eaf788aec678392451526d985f3";
	var xhr = new XMLHttpRequest();

	var apiCall = "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedTaxonomy?apikey=";
	var maxRetrieve = "3";
	xhr.open("GET", apiCall + apikey + "&text=" + text.replace(" ","%20") + "&maxRetrieve=" + maxRetrieve, false);
	xhr.send();

	var apiResult = xhr.responseXML;
	var parse = apiResult.getElementsByTagName("label");
	var key = parse[0].textContent.split("/");
	//document.write(key[key.length-1]);
	// only take one word
	//document.write(giphy(key[(key.length-1)/2]));
	//document.write(giphy(key[(key.length-1)]));
	keyLen = key.length;
	return key[(keyLen - 1) - i];

	
}


function giphy(key) {
	var i = 0;
	var apikey = "dc6zaTOxFJmzC";
	var xhr = new XMLHttpRequest();
	var lim = 1;
	var fmt = "json";

	var apiCall = "http://api.giphy.com/v1/gifs/search?q=";
	
	xhr.open("GET", apiCall  + key + "&api_key=" + apikey + "&limit=" + lim + "&fmt=" + fmt, false);
	//document.write(1);
	//xhr.setRequestHeader('Accept', 'application/json');
	xhr.send();

	var gif = JSON.parse(xhr.responseText);


	while ((gif == null || gif.data.length == 0) && i < keyLen){
		i++;
		key = getURL(text, i);
		xhr.open("GET", apiCall  + key + "&api_key=" + apikey + "&limit=" + lim + "&fmt=" + fmt, false);
		xhr.send();
		gif = JSON.parse(xhr.responseText);
	}

	var gifURL = gif.data[0].images.fixed_height.url;
	//document.write(1);
	//document.write(gif);
    //document.write("Gif url has been copied to your clipboard!");
	return gifURL;
}

