<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">

function getURL(text) {
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
	return key[key.length-1];
}

getURL("My favorite brands are BMW and Ferrari");

function giphy(key) {
	var apikey = "dc6zaTOxFJmzC";
	var xhr = new XMLHttpRequest();
	var lim = 1;
	var fmt = "json";

	var apiCall = "http://api.giphy.com/v1/gifs/search?q=";
	
	xhr.open("GET", apiCall  + key + "&api_key=" + apikey + "&limit=" + lim + "&fmt=" + fmt, false);
	document.write(xhr.statusText);
	//xhr.setRequestHeader('Accept', 'application/json');
	xhr.send();
	//document.write(xhr.responseText);
	var gif = JSON.parse(xhr.responseText);
	var gifURL = gif.data[0].images.fixed_height.url;
document.write(gifURL);
    
	return gifURL;
}

giphy("ferrari");

</script>
</head>
<body></body>
</html>
