var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores = prompt("Digite o valor");
var [A, B, C] = valores.split(" ");
A = parseFloat(A).toFixed(1);
B = parseFloat(B).toFixed(1);
C = parseFloat(C).toFixed(1);

var delta = (B*B)-((4*A)*C);
var Rdelta = Math.sqrt(delta);
var R1 = (-B + Rdelta)/(2*A);
var R2 = (-B - Rdelta)/(2*A);

if (delta >= 0 && A!=0){
	console.log("R1 = " + (R1).toFixed(5));
    console.log("R2 = " + (R2).toFixed(5)); 
}
else {
 console.log("Impossivel calcular");}