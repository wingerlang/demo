function init() {
	var then = new Date('2012-06-30'),
	displaySeconds = U.$('seconds'),
	updater;

	U.$('then').innerHTML = then;

	updater = setInterval(function(){
		displaySeconds.innerHTML 	= U.formatTime((Math.abs(then - Date.now()) / 1000).toFixed(0));
	}, 1000);
}

window.onload = init;