var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("Insira o valor");
var [A, B] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);
var C = Math.abs(A - B);
if(A == B){
	console.log("O JOGO DUROU 24 HORA(S)");
}
else if (A > B){
C2 = C + 24;

if(C2 >= 24){

var D = 24 - Math.abs(A - B);
	console.log("O JOGO DUROU " + D + " HORA(S)");
}
}
else if(A < B){
	console.log("O JOGO DUROU " + C + " HORA(S)");
}