var a = prompt(' Entrer un premier nombre : ');
var b = prompt( 'Entrer un deuxième nombre :');
var quotient = Math.floor(a/b)
var reste = a % b;

if (a > b ){
	console.log(quotient)
	console.log(reste)
}

else if (a ==0 || b == 0 ){
	console.log(" On ne peut pas diviser par 0 !")
} else {
	console.log( "Erreur lors de la saisi !!! ")
}