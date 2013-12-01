var kryptogram = "XNCUPBNAGÄAGCBNROÅHPBTOYTHZMMNGÄCÖMMDAGNAOÅIDCPTÖGVNCPPMMPCBNINCCNROÅHNARBZTNSÄUDGNAUPBXNCNARBOEUNBNAVOBTTOYXNYÄTCNEUNBOÅIZAXNBXNARBOAROXXNNCCOCDÅHCCBOMMYNXEGOATOYCNAACPMMBÖHPBOÅIADTPMÄAGTOYNCCBDVTNTHPVCVEBTCHOYXNAKAGTCPROÅHNARBZTNOÅITHZMMNEUNBRBOACBÖSSCBÖSSCBPSSMDCXNCÖRBOAUNYDBXNCTOYCBÖSSPBSÄYÖARBOTHBNHCBOMMNCXNCDBXNAYÖATCPROÅHNARBZTNQPGTHPCÖMMDAGNAOÅIRMÖVNCTPROÅHNAYNXTÖAMQZTPBETCAZHOYYNBQPGOÅICPBXÖGTPCBOMMNCÄIANQCPÖACNYNQVEBQPGDBTÄMÖCNAUDACPMÖCNTÄHOYYNBXNAYNMMNBTCPROÅHNARBZTNIPADBYKÅHNCTCEBBNHEBCÖMMXÄTPCBOMMNCNVCNBNAMÖCNATCZAXHOYXNAYNMMNBTCPROÅHNARBZTNCBÖSSCBPSSCBÖSSCBPSSMDCXNCÖRBOAUNYDBXNCTOYCBPYSPBSÄYÖARBOTHBNHCBOMMNCXNCDBRPBPXNAYNMMNBTCPROÅHNARBZTNTOYTHPCÖMMDAGNAOÅIRMÖVNCTPROÅHNAYNXTÖAGPATHPHBPVCÖGPBETCXÄHOYYNBQPGOÅICPBXÖGTHBNHCBOMMNCÄIANQCPÖACNYNQUDACPMÖCNTÄHOYYNBXNATCOBPROÅHNARBZTNIPADBYKÅHNCYKÅHNCTCEBBNMÄCGÄTPCBOMMNCOCÄMÖGCBDCCTOYXNCUPBHOYXNATCOBPROÅHNARBZTNCBÖSSCBPSSCBÖSSCBPSSCBÖSSCBPSSMDCXNCÖRBOAXNAROÅHNAUPBTÄCZAGPCCXNCHAPHPXNOÅIRBPHPXNÖRBOAUNYDBXNCTOYHMPYSPBSÄYÖARBOTHBNHCBOMMNCXNCDBXNATCOBPROÅHNARBZTNTPROÅHNAYNXTÖAXÄAPAXNBETCXÄDBXNCXÖGQPGUDACPCSÄOÅIAZHOYYNBQPGOÅICPBXÖGTHBNHCBOMMNCQPHOYXZRPBPTPROÅHNAOÅITÄBZTPXNIPASÄCBOMMNCOÅITCÄAGPXNXNCTÄIÄBCPCCXNCVOBÖUDGMÄAGCROBCOÅIANBÖÄAOÅICPÅHUPBNXNCHZAXNPMMPCBNGÄCÖMMDAGNAXDBRMNUROÅHPBAPTÄVNCPTÄVNCPPCCXNHAPSSPTCOBHPXNGÄINYÖGNAOÅIIPBÖACNVNCCNCBPYMPCPUXNYTÄDBXNUDMVNCPDAXÄUPBXNCCBNXQNHBKSCOCOHÅÄTHADÅHCADTCPDBNCCUÖGNANBNHBKSCO"
// var kryptogram = "XNCUPBNAGÄAGCBNROÅHPBTOYT";
var alfa = "ABCDEFGHIJKLMNOPQRSTUVXYZÅÖ"
var cur;

// Monogram
var kryptogram_mono_obj = _.countBy(kryptogram, function(l) { return l } );
var kryptogram_mono = [];
for (var letter in kryptogram_mono_obj) {
	kryptogram_mono.push([letter, kryptogram_mono_obj[letter]])
}
kryptogram_mono.sort(function(a, b) {return b[1] - a[1]})

var kryptogram_mono_li = "";
for(var i = 0; i < kryptogram_mono.length; i++) {
	cur = kryptogram_mono[i];
	kryptogram_mono_li += "<li>" + cur[0] + ' ' + percent(cur[1], kryptogram.length)  + "% (" + cur[1] + ")</li>";
}

// Bigram
var kryptogram_bi_obj = {};
for (var i = kryptogram.length - 2; i >= 0; i--) {
	cur = kryptogram[i] + kryptogram[i+1];
	kryptogram_bi_obj[cur] = (kryptogram_bi_obj[cur] > 0) ? kryptogram_bi_obj[cur] + 1 : 1; 
};

var kryptogram_bi_sorted = [];
for(var letter in kryptogram_bi_obj) {
	if(kryptogram_bi_obj[letter] > 5) {
		kryptogram_bi_sorted.push([letter, kryptogram_bi_obj[letter]]);
	}
}
kryptogram_bi_sorted.sort(function(a, b) {return b[1] - a[1]})

var kryptogram_bi_li = "";
for(var i = 0; i < kryptogram_mono.length; i++) {
	cur = kryptogram_bi_sorted[i];
	kryptogram_bi_li += "<li>" + cur[0] + ' ' + percent(cur[1], kryptogram.length)  + "% (" + cur[1] + ")</li>";
}

function percent(v, t) {
	return ((v/ t) * 100).toFixed(2);
}

document.querySelector('#kryptogram_mono').innerHTML = kryptogram_mono_li;
document.querySelector('#kryptogram_bi').innerHTML = kryptogram_bi_li;

var monogram = {
	'e': 10.1,
	'a': 9.0,
	'r': 8.7,
	'n': 8.6,	
	't': 8.2,
	's': 6.9,
	'i': 6.2,
	'l': 5.0,
	'd': 4.8,
	'o': 4.4,
	'm': 3.4,
	'k': 3.4,
	'g': 3.0,
	'v': 2.5,
	'h': 1.9,
	'f': 1.9,
	'p': 1.8,
	'u': 1.8,
	'ä': 1.7,
	'ö': 1.5,
	'å': 1.3,
	'b': 1.3,
	'c': 1.2,
	'j': 0.6
}

var bigram = {
	'en': 2.5,
	'er': 2.2,
	'de': 2.2,
	'an': 1.7,
	'st': 1.5,
	'ar': 1.5,
	'in': 1.3,
	'te': 1.3,
	'et': 1.2,
	'nd': 1.2,
	'ti': 1.2,
	'ra': 1.1,
	're': 1.1,
	'at': 1.1,
	'tt': 1.1,
	'ri': 1.1
}

var trigram = {
	'för': '',
	'och': '',
	'nde': '',
	'and': '',
	'ing': '',
	'ter': '',
	'den': '',
	'att': '',
	'ade': '',
	'gen': '',
	'som': '',
	'ens': '',
	'ill': '',
	'det': '',
	'ska': '',
	'sta': '',
	'til': '',
	'era': '',
	'rin': '',
	'der': ''
}

var vowels = 'AOUÅEIYÄÖ';
var consonants = _.difference(alfa.split(''), vowels.split(''));

console.log(consonants);

$('#kryptogram').html(kryptogram);	

var taken = "";
var removeWhitespace = /\s+/g;

$('#rules').keyup(function() {
	var rules = $(this).val().replace(removeWhitespace, ' ').toUpperCase();
	var pt = kryptogram;
	var taken = "";
	
	for(var i = 0; i < rules.length; i+=4) {
		if(rules[i+2] != undefined) {
			taken += rules[i+2];
			pt = pt.replace(new RegExp(rules[i], 'g'), rules[i+2].toLowerCase());
		}
	}

	pt = pt.split('');
	for (var i = pt.length - 1; i >= 0; i--) {
		if(pt[i] != kryptogram[i]) {
			pt[i] = wrapWithClass(pt[i].toLowerCase(), 'done');
		}
	};

	$('#plaintext').html(pt);
	$('#taken').html(taken);

	$('#monogram').html(createList(monogram, taken));
	$('#bigram').html(createList(bigram, taken));
	$('#trigram').html(createList(trigram, taken));

	sessionStorage.rules = document.querySelector('#rules').value;
});

function wrapWithClass(s, c) { return '<span class="' + c + '">' + s + '</span>'; }

function createList(obj, taken) {
	var html = "";
	var match = true;
	var intersection;
	taken = taken.split('');

	for(k in obj) {
		for (var i = k.length - 1; i >= 0; i--) {
			intersection= _.intersection(taken, k.toUpperCase());
			match = intersection.length == _.uniq(k).length;
		};

		html += "<li>" + (match ? wrapWithClass(k,'done') : k) +  " " + obj[k] + "</li>";
	}
	return html;
}

$('#plaintext').html(kryptogram);

$('#remaining').html( _.difference(alfa.toLowerCase().split(''), taken.toLowerCase().split('')));

document.querySelector('#rules').value = sessionStorage.rules || "";
$('#rules').trigger('keyup');