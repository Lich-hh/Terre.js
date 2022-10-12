let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
promptTexte = prompt (' Entrer une lettre : ');
let index = alphabet.indexOf(promptTexte);
for (var i = index ; i < alphabet.length; i ++)  {
	console.log(alphabet[i]);
	
}