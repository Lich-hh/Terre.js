var readline = require('readline');

var phrase = readline.createInterface({
	input: process.stdin,
	output: process.stdout
	

});

phrase.question(" Entre une phrase : " , function(reponse) {
	

		console.log('\n' + phrase)
	



});	

