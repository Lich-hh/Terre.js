let phrase = "Bonjour";

if (phrase.length == 0 || phrase.length < 2) {
	console.log (" Erreur ! ");
} else if ( typeof phrase == null ){
	console.log ( " Erreur ! ");

} else if ( typeof phrase == undefined ) {
	console.log ( " Erreur ! ");
} else if ( typeof phrase == 'string'){

	console.log (phrase.length);
}

else if (typeof phrase == Number ){
	console.log ( " Erreur ! ")
}


else {
	console.log ( " Erreur ! ");
}

