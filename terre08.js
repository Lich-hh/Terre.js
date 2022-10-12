var nombre = 10
var exposant = -7

if (exposant >= 0 || typeof nombre === Number ){
	console.log (Math.pow(nombre,exposant));
} else if (typeof nombre == 'string' || typeof exposant == 'string') {
	console.log ( "Erreur entrer seulement des nombres ! ")
}

else {
	console.log ( " Erreur la puissance ne peut pas etre négative ! ")

}
