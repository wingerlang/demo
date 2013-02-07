
QUnit.test("Test Utilities meta info", function(assert) {
	/*jshint expr:true */
	assert.equal(U.info.shortName,"U");
	assert.equal(U.info.longName,"Utiliies");
	assert.equal(U.info.version,0.1);
	assert.equal(U.info.author,"Johannes Winger-Lang");
});


QUnit.test("Test Utilities meta info again", function(assert) {
	/*jshint expr:true */
	ok( 1 == '1', "Passed!");
});
