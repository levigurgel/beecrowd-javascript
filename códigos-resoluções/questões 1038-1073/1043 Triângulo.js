var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores = prompt("digite o valor");
var [A, B, C] = valores.split(" ");

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);
var peri = ((A + B) + C);
var area = (((A + B)*C)/2);
if(A + B > C &&  A + C > B && B + C > A){
	console.log("Perimetro = " + peri.toFixed(1));
}
else {
	console.log("Area = " + area.toFixed(1));
}