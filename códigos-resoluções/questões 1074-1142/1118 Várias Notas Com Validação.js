var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var N = 1
while (N ==1) {
var X = parseFloat(prompt("X"));
while ( X < 0 || X > 10) {
	 console.log("nota invalida");
	 X = parseFloat(prompt("X"));
}
var Y = parseFloat(prompt("Y"));
while ( Y < 0 || Y > 10) {
	 console.log("nota invalida");
	 Y = parseFloat(prompt("Y"));
}
media = (X + Y) / 2 ;
console.log("media = " + media.toFixed(2));

console.log("novo calculo (1-sim 2-nao)");

var N = prompt(parseInt("1 ou 2"));
while ( N != 1 && N != 2){
	console.log("novo calculo (1-sim 2-nao)");
	 N = prompt(parseInt("1 ou 2"));
}	
}