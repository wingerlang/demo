function disable(e){
	if(typeof e == 'string') document.getElementById(e).disabled = true;
	else e.disabled = true;
}
function enable(e){
	if(typeof e == 'string') document.getElementById(e).disabled = false;
	else e.disabled = false;
}
function handleAjax(e){
	'use strict';
	if(typeof e == 'undefined') e = window.event;
	var ajax = e.target || e.srcElement, 
			status = document.getElementById('status');

	if(ajax.readyState == 4) {
		if( (ajax.status >= 200 && ajax.status < 300) || ajax.status == 304 ) {
			status.innerHTML = ajax.responseText;
			enable('submit')
		} else {
			status.innerHTML = "ERROR";
		}		
	} else {
		status.innerHTML = "LOADING";
		disable('submit');
	}
}

function init() {
	'use strict';
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = handleAjax;

	document.getElementById('form').onsubmit = function (){
		var fields = ['name', 'email', 'comments'], data = [];

		for(var i = 0, count = fields.length; i < count; i++ ){
			data.push(encodeURIComponent(fields[i]) + '=' + encodeURIComponent(document.getElementById(fields[i]).value ));
		}		
		ajax.open('POST','fake_database.php',true);
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(data.join('&'));
		return false;
	}
}
window.onload = init;