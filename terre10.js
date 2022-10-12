//entre un nombre :
var nombre = 7777;

if ( nombre > 2 && nombre %2 == 0 ){
	console.log( " Ce n'est pas un nombre premier ");
} else if (nombre === 2 ){
	console.log (" 2 est le seul nombre pair et premier ");
} else if ( nombre > 2 && nombre %2 !== 0) {
	console.log ( " Ta rentré un nombre qui est premier ");
} else if (nombre === 1 || nombre === 0){
	console.log ( " 1 et 0 ne sont pas premier ! ")
}

else{
	console.log ( " Erreur ! Je ne reconnais pas le nombre entré !")
}
