function $(id){
	return document.getElementById(id);
}
function updateText(e){
	var target = e.target || e.srcElement,
			label  = document.querySelector('label[for='+target.id+']').innerHTML = target.value + "deg";
	rotateCube(target.id,label);
}
function rotateCube(target,deg) {
	setTimeout(function(){
		$('cube').setAttribute('style','-webkit-transform: rotate'+target+'('+deg+')');
	},10);
}
function init() {
	$('X').onchange = updateText;
	$('Y').onchange = updateText;
}
window.onload = init;