var U = {
	info: {
		shortName : "U",
		longName  : "Utiliies",
		version: (0.1).toFixed(2),
		author: 'Johannes Winger-Lang'
	},

	check: function() { console.log("CHECK!");
},

removeClass: function(el,cl) {
	this.replaceClass(el,cl,'');
},

replaceClass: function(el,old,newClass) {
	el.className = String(el.className).replace(old, (newClass || '') );
	console.log(el.className + ' ' + newClass);
},

$ : function(id) { return document.getElementById(id); },

toString : function() {
	return this.info.shortName + ' (' + this.info.longName + ') v' + this.info.version + ' by ' + this.info.author + ' initiated.';
},

<<<<<<< HEAD
decimal : function(n) {
	return parseFloat(n).toFixed(0);
},

prependZero : function(c) {
	return (c < 10) ? ('0' + U.parseFloat(c)) : U.parseFloat(c);
},

formatTime : function(t){
	var hour = 0, min = 0, s = (t || 0), time = "", days = 0;

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
	time += this.prependZero(hour) + ':' + this.prependZero(min) + ':' + this.prependZero(s);
	return time;
}

}
console.log(U.toString());