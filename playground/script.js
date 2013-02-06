function showValue(){
	document.getElementById("display_speed").innerHTML = document.getElementById('run_speed').value;
}
function $$(e){
	return document.querySelectorAll(e);
}
function $(e) {
	return document.querySelector(e);
}
function styleStart(el){ el.innerHTML = "RUNNING"; el.className = "green"}
function styleStop (el){ el.innerHTML = "STOPPED"; el.className = "red";}
function init() {
	function init_events(){
		run_speed.addEventListener('change', showValue);
		run_speed.addEventListener('change', core);
		run.onclick = core;
		$('#submit').onclick = function(){ sendAjax(); };
		$('#checkAll').onclick	 		= checkAll;
		$('#checkToggle').onchange 	= checkToggle;
		$('#deCheckAll').onclick 		= deCheckAll;
		$('#checkInverse').onclick 	= checkInverse;
		nths.onchange = nthSmaller;
	}
	var start 					= Date.now(),
	 		checkbox				= $('#checkmate'),
			run 			 			= $('#run'),
			run_status 			= $('#run_status'),
			run_speed 			= $('#run_speed'),
			intervalcounter	= $('#intervalcounter'),
			runtime 				= $('#runtime'),
			nths 						= $('#nth'),
			bb;

	init_events();

	function core() {
	 	clearInterval(bb);

		if(run.checked) {
			styleStart(run_status);

			bb = setInterval(function(){
				checkbox.checked = (checkbox.checked) ? false : true;
				hideImages();
				imageWorm( document.querySelectorAll('#worm img') );
				moveArorw();
				intervalcounter.innerHTML = parseInt(intervalcounter.innerHTML) + 1;
				addElement('span');
				sendAjax();
				runtime.innerHTML = ((Date.now()-start) / 1000).toFixed(3) + " seconds";
				incrementN(nths);
			},$('#run_speed').value);

		} else {
			styleStop(run_status);
			clearInterval(bb);
		}
	};
	run_status.click();
}

window.onload = init;

function hideImages(){
	var img = document.querySelectorAll('#blink img');
	for(var i=0, len = img.length; i < len; i++) {
		toggleClass(img[i],'invisible');
	}	
}
function toggleClass(ele,cls) {
	if(hasClass(ele,cls)){
		removeClass(ele,cls);
	} else {
		ele.className = cls;
	}
}
function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}
function imageWorm(images){
	for(var i=0, len = images.length-1; i < len; i++) {
		var cur = images[i].src,
				next= images[i+1].src;

		images[i].src = next;
		images[i+1].src = cur;
	}
}
function makeArray(obj) {
	var newArr = [];
	for(var i=0, len = obj.length; i<len; i++)
		newArr[newArr.length] = obj[i];
	return newArr;
}
function addElement(e){
	var e = document.createElement(e);
	var parent = document.getElementById('dynamic');
	e.innerHTML = "WHAT?";
	e.className = 'floatleft';
	
	if( $$('#dynamic')[0].childElementCount > 100) {
		while( parent.hasChildNodes() ){
    	parent.removeChild(parent.lastChild);
		}
	}
	$('#dynamic').appendChild(e);
}
function checkAll(b){
	var boxes = $$('#checkboxes input[type=checkbox]');
	for(var i=0, len=boxes.length; i<len; i++) {
		boxes[i].checked = true;
	}
}
function deCheckAll(b){
	var boxes = $$('#checkboxes input[type=checkbox]');
	for(var i=0, len=boxes.length; i<len; i++) {
		boxes[i].checked = false;
	}
}
function checkInverse(){
	var boxes = $$('#checkboxes input[type=checkbox]');
	for(var i=0, len=boxes.length; i<len; i++) {
		boxes[i].checked = (boxes[i].checked) ? false : true;
	}
}
function checkToggle(){
	var boxes = $$('#checkboxes input[type=checkbox]'),
			status = $('#checkToggle').checked;
	for(var i=0, len=boxes.length; i<len; i++) {
		boxes[i].checked = status;
	}
}
function moveArorw(){
	var arrow = document.getElementById("arrow"),
			parent = arrow.parentElement;

	if(!arrow.style.marginLeft){
		arrow.style.marginLeft = 10;
	}

	if(!hasClass(arrow,'backways')) {
		if(parseInt(arrow.style.marginLeft) >= parent.clientWidth-40) {
			arrow.className = 'backways';
	}
		arrow.style.marginLeft = parseInt(arrow.style.marginLeft) + 10;
	} else {
		if(parseInt(arrow.style.marginLeft)){
			arrow.style.marginLeft = parseInt(arrow.style.marginLeft) - 10;
		} else {
			removeClass(arrow,'backways');
		}
	}
}
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
			status = document.getElementById('status'),
			count  = document.getElementById('ajax_count');

	if(ajax.readyState == 4) {
		if( (ajax.status >= 200 && ajax.status < 300) || ajax.status == 304 ) {
			status.innerHTML = ajax.responseText;
			enable('submit');
			if('INVALID' == ajax.responseText){	
				count.value = Number(count.value) + 1;
			}
		} else {
			status.innerHTML = "ERROR";
		}		
	} else {
		status.innerHTML = "LOADING";
		disable('submit');
	}
}
function sendAjax(ajax){
	var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = handleAjax;
		ajax.open('GET','http://localhost/johannes/snippets/ajax/fake_database.php',false);
		ajax.send(null);
		ajax = null;
}

function nthSmaller(){
	var n = Number($('#nth').value),
			box = $$('.minibox:nth-child('+(n+1)+')')[0],
			allbox = $$('.minibox');
			
	for(var i=0, len = allbox.length; i<len; i++) {
		allbox[i].className = allbox[i].className.replace(' small','');
	}

	if(box) {
		box.className += ' small';
	}
	$('.nthvalue').innerHTML = n;
}

function incrementN(nths){
	$('#nth').setAttribute('max', $$('.minibox').length);
	nths.value = (nths.value < $$('.minibox').length) ? Number(nths.value) + 1 : 0;	
	nthSmaller();
}