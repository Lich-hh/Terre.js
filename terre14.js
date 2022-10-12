var arr = [4 , 12 , 8 , 9];

let number1 = arr[0];
let number2 = arr[1];
let number3 = arr[2];
let number4 = arr[3];

 
 if ( number1 < number2 && number2 < number3 && number3  < number4) {
	console.log ( " Trié  ! ");
} else if ( number1 > number2 || number2 > number3 || number3 > number4)  {
	console.log ( " Pas trié ! ");
} else {
	console.log ( " Erreur lors de la saisi !!! ");
}


