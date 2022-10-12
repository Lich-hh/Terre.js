//Entrer l'heure que vous voulez :

var heure = 8;
var minutes = 15;

function conversion(){
	if (heure >= 24 || minutes >= 60) {
		console.log (" Erreur lors de la saisi !!! ")
	}

	else if (heure > 12 && heure < 24){
		var heurePM = heure -12 ;
		console.log (heurePM + " : " + minutes + " PM ");
		return
	} else if (heure < 12 && heure > 0){
		console.log (heure + " : " + minutes + " AM ");

	} else if ( heure == 12 ){
		console.log ( heure + " : " + minutes + " AM ");
	} else if ( heure == 0 ) {
		console.log ( " 00 " + " : " + minutes + " AM ");
	} else if ( heure >= 24 || minutes >= 60){
		console.log ( " Erreur lors de la saisi !!! ")
	}
}


conversion()