function formatNames(){
	var fname = document.getElementById('fname').value,
			lname = document.getElementById('lname').value;

	if(fname.length > 0 && lname.length > 0) {
		document.getElementById('formated').value = lname + ', ' + fname;
	} else {
		// Display 'error' message
	}
}

function init() {
	document.getElementById('submit').onclick = formatNames;
}
window.onload = init;