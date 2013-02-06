function $(id){ return document.getElementById(id);}

function draw(e){
	$('output').innerHTML = format(this.value );
}
function format(n){	
	return addSpaces(n);
}
function addSpaces(n){
	n = reverse(n.replace(/ /g,''));
	return reverse((n.length > 3) ? n.replace(/(.{2}.)/gi, "$1 ") : n);
}
function reverse(s){
	return s.split("").reverse().join("");
}
function init() {
	var input = $('input'),
	output =$('output'),
	error = $('error');

	input.onkeyup = draw;
	input.focus();
}
window.onload = init;