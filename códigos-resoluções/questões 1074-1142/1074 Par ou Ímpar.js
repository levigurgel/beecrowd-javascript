var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Chances = parseInt(prompt("Quantidade de Numeros!"));
var A = 1;
while (A <= Chances) {
    var X1 = parseInt(prompt("X"));
    
    if (X1 % 2 != 0 && X1 > 0) {
    console.log("ODD POSITIVE");
}else if (X1 % 2 != 0 && X1 < 0) {
    console.log("ODD NEGATIVE");
}else if (X1 % 2 == 0 && X1 < 0) {
    console.log("EVEN NEGATIVE");
}else if (X1 % 2 == 0 && X1 > 0) {  
    console.log("EVEN POSITIVE");
}else if (X1 == 0) {
    console.log("NULL");
}    

A++ 
}