var konamikeys = [];
document.addEventListener("keyup", function(ev) {
	konamikeys.push(ev.keyCode);
	if (konamikeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
		/* prank goes here */
		konamikeys = [];
	}
});