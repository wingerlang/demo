var time = {
	clock : U.$('clock'),
	start : 60*15,
	left  : 60*15, 
	toString : formatTime(this.left),
	active : null,

	run : function() {
		time.active = setInterval(function(){

			time.setStyle(time.percentLeft())

			if(time.left < 0) {		
				clearInterval(time.active);
				time.end();
			} else {			
				clock.innerHTML = formatTime(time.left--);
			}
		}, 1000);
	},
	pause: function() {
		clearInterval(time.active);
	},

	end : function() {
		clock.innerHTML = "TIME'S UP!!";
	},

	percentLeft : function() {
		return (100 * (time.left / time.start).toFixed(2)) || 0;
	},

	setStyle : function(percent) {
		console.log("Percent " + percent);
		
		if(percent > 66) {
			clock.className = 'green';
		} else if (percent > 33) {
			clock.className = 'orange';
		} else if (percent > 6) {
			clock.className = 'red';
		} else {
			clock.className = 'critical';
		}
	}

}
function prependZero(c) {
	return (c < 10) ? ('0' + c) : c;
}
function formatTime(t){
	var hour = 0, min = 0, s = t||0, time = "", days = 0;

	if(s >= 60) {
		min = Math.floor(s / 60);
		s = s % 60;
	} 
	if(min >= 60) {
		hour = Math.floor(min / 60);
		min = min % 60;
	}
	if(hour >= 24) {
		days = Math.floor(hour / 24);
		hour = hour % 24;		
	}

	if(days) {
		time = days + ' days ';
	}
	time += prependZero(hour) + ':' + prependZero(min) + ':' + prependZero(s);
	return time;
}

function init() {
	U.$('start').onclick = time.run;
	U.$('pause').onclick = time.pause;

	time.clock.innerHTML = formatTime(time.left); // init
}

window.onload = init;