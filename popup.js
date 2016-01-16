document.addEventListener('DOMContentLoaded',function() {
	chrome.windows.getCurrent(null, function(w) {
		var text = w.getSelection().toString();
	});

	document.getElementById("text").innerHTML = text;


});
