window.onload = (function(){
	'use strict';

	function printAsImage(obj){
		var images = [], i = 0, len = obj.length, 
				parent = document.getElementById('parent'),
				that = document.createElement('div'),
				images = [];

		for(; i < len; i++) {
			var img = document.createElement("img");
			img.src = dir + '/' + obj[i];
			img.className += "thumbnail hidden";
			parent.appendChild(img);
			images[images.length] = img;
		}

		
			var nr = 0;
			var interval = setInterval(function(){

				console.log(obj[nr]);
				U.removeClass(images[nr],'hidden');
				
				if(++nr >= images.length) clearInterval(interval);
			},200);
	}


	function handleAjax(e){
		if(typeof e == 'undefined') e = window.event;

		var ajax = e.target || e.srcElement, 
		status = document.getElementById('status');

		if(ajax.readyState == 4) {
			if( (ajax.status >= 200 && ajax.status < 300) || ajax.status == 304 ) {
				status.innerHTML = (ajax.responseText);
				 printAsImage(JSON.parse(ajax.responseText));
				
			} else {
				status.innerHTML = "ERROR";
			}		
		} else {
			status.innerHTML = "LOADING";
		}
	}

	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = handleAjax;

	var dir = prompt("Enter gallery folder",'gallery');

	var getString = "?dir=" + encodeURIComponent(dir),
	destination = 'images.php';

	ajax.open('GET',destination+getString ,true);
	ajax.send(null);
	
}());