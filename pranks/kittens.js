// replace all image elements with placekitten images
[].forEach.call(document.getElementsByTagName('img'), function(el) {
	el.setAttribute('src', "http://placekitten.com/"+el.offsetWidth + '/' + el.offsetHeight);
});

// replace all inline background images with placekitten images
// - if you know you don't have inline background images, you could replace the selector with an element tag
[].forEach.call(document.querySelectorAll('[style*=background-image]'), function(el) {
	if ((path = el.style.backgroundImage) && path.indexOf('url(') === 0) {
		path = path.replace(/^url\((.*)\)$/, '$1').replace('"', '');
		path = path.slice(1, path.length - 1)

		var img = new Image();
		img.src = path;
		img.onload = function() {
			if (img.width > 20 && img.height > 20) {
				el.style.backgroundImage = "url(http://placekitten.com/" + img.width + "/" + img.height + ")";
			}
		};
	}
});