var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt(""));
var Inicio = 0;

if (N > 2 && N <1000){
   while (Inicio <= 9) {
    Inicio++
    var formula = Inicio * N;
    console.log(Inicio + " x " + N + " = " + formula);   
   }
}