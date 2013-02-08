
QUnit.test("Test Utilities meta info", function(assert) {
	equal(U.info.shortName, "U");
	equal(U.info.longName, "Utiliies");
	equal(U.info.version, 0.1);
	equal(U.info.author, "Johannes Winger-Lang");
});

QUnit.test("Test format time", function(assert) {
	console.log(U)
	equal(U.formatTime(100), '00:01:40');
	equal(U.formatTime(60), '00:01:00');
	equal(U.formatTime(7388), '02:03:08');
});

QUnit.test("Access document", function(){
	equal(U.$('body'), document.getElementById('body'));
	equal(U.$('head'), document.getElementById('head'));
});

QUnit.test("Prepend zero", function(){
	equal(U.prependZero('0'), '00');
	equal(U.prependZero('3'), '03');
	equal(U.prependZero('8'), '08');
	equal(U.prependZero('14'), '14');
	equal(U.prependZero('04'), '04');
});