//Rentrer 3 nombres : 

var entier = [5 , 45 , 8];

if ( entier[0] < entier[1] && entier[0] > entier[2]){
	console.log(entier[0]);
}
else if ( entier[0] > entier[1] && entier[0] < entier[2]) {
	console.log(entier[0]);
}
 else if ( entier [1] < entier[0] && entier[1] > entier[2]){
	console.log(entier[1]);

} else if ( entier[1] > entier[0] && entier[1] < entier[2]){
	console.log(entier[1]);

}

else if (entier[2] > entier[0] && entier[1] > entier[2]) {
	console.log (entier[2]);
}else if ( entier[2] < entier[0] && entier[1] < entier[2]){
	console.log (entier[2]);
}else if (entier[0] == entier[1] || entier[1] == entier[2] || entier[2] == entier[0]){
	console.log ( " Erreur on ne peut pas rentrer des nombres égaux !")

}
else {
	console.log ( " Erreur lors de la saisi !!! ");
}
