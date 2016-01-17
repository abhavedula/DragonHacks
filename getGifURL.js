<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">

var apikey = "c6e9079c85789eaf788aec678392451526d985f3";
var xhr = new XMLHttpRequest();

var apiCall = "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedTaxonomy?apikey=";
//var outputMode = "xml";
var maxRetrieve = "3";

function getURL(text) {
xhr.open("GET", apiCall + apikey + "&text=" + text.replace(" ","%20") + "&maxRetrieve=" + maxRetrieve, false);
//xhr.setRequestHeader('Content-Type', 'text/xml');

xhr.send();

var apiResult = xhr.responseXML;
//var parsed = (apiResult.childNodes['0'].textContent);
var parse = apiResult.getElementsByTagName("label");
var key = parse[0].textContent.split("/");
document.write(key);

return key;
}

getURL("My favorite brands are BMW and Ferrari");

</script>
</head>
<body></body>
</html>
