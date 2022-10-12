//Entrer l'heure suivi des minutes et de "AM " ou "PM"

var arr = [5, 50 ,"PM"];
var heure = arr[0];
var minutes = arr[1];
var quand = arr[2];
var addheure = heure + 12;

if (heure > 12 || heure <0 || minutes >= 60) {
	console.log ( "Erreur lors de la saisi !!! ");

} else if (heure >= 0 && heure <= 12 && quand == "PM"){
	console.log ( addheure + ":" + minutes);
} else if ( heure >= 0 && heure <= 12 && quand == "AM"){
	console.log ( heure + ":" + minutes);
} else {
	console.log ( " Erreur lors de la saisi !!! ");
}
