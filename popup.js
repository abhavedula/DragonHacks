var sel;
document.addEventListener('DOMContentLoaded',function() {
	chrome.windows.getCurrent(null, function(w) {
		sel = w.getSelection().toString();
		document.getElementById("text").innerHTML = sel;

	});

});
