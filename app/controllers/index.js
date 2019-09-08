function doClick(e) {
	alert($.label.text);
}
var secondLoad = false;
$.webview.addEventListener('load', function(e) {
	$.webview2.url = "https://hnestmann-inside-eu01-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/CookieCheck-Check";
	$.webview2.reload();

});

$.index.open();
