<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript">

var apikey = "c6e9079c85789eaf788aec678392451526d985f3";
var xhr = new XMLHttpRequest();

var apiCall = "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedConcepts?apikey=";
var outputMode = "json";
var maxRetrieve = "3";

function getURL(text) {

xhr.open("GET", apiCall + apikey + "&text=" + text + "&maxRetrieve=" + maxRetrieve + "&outputMode=" + outputMode, false);

xhr.send();


}

</script>
</head>
<body></body>
</html>
