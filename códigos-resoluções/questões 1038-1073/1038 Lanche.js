var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("Insira o valor");
var [A, B] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);

if (A == 1) {
	console.log("Total: R$ " + (B*4).toFixed(2));
}
else if (A == 2) {
	console.log("Total: R$ " + (B*4.50).toFixed(2));
}
else if (A == 3){
	console.log("Total: R$ " + (B*5).toFixed(2));
}
else if (A == 4){
	console.log("Total: R$ " + (B*2).toFixed(2));
}
else if (A == 5){
	console.log("Total: R$ " + (B*1.50).toFixed(2));
}