$(document).ready(function() {
    emolTabs();
});

function emolTabs() {
	$("a[onClick^='record']").removeAttr("onClick");
}