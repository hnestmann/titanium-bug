function doClick(e) {
	alert($.label.text);
}
var secondLoad = false;
$.webview.addEventListener('load', function(e) {
	Ti.API.warn('Loaded')
	if (!secondLoad) {
		Ti.API.warn('Change URL')
		$.webview.reload();
		secondLoad = true;
	} else {
		$.webview2.url = "https://hnestmann-inside-eu01-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/CookieCheck-Check";
		$.webview2.reload();
	}
});

$.webview2.addEventListener('load', function(e) {
	Ti.API.warn($.webview.evalJS("document.cookie"));
	Ti.API.warn($.webview2.evalJS("document.cookie"));
});


$.index.open();
