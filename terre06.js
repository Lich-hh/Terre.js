var mot = 'HeyHeyHey';
var inverse = mot.split('').reverse().join('');

if (typeof mot == 'string'){
	console.log (inverse)
} else {
	console.log (" Erreur lors de la saisi ! ")
}