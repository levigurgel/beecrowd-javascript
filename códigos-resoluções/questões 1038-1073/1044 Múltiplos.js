var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("digite o valor");
var [A, B] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);

if( A > B && A % B == 0 || B > A && B % A == 0) {
	console.log("Sao Multiplos");
}
else {
	console.log("Nao sao Multiplos");
}