var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var inicio = 1;
var X = parseInt(prompt("X"));


var n = 1;

while (inicio <= X) {
    console.log(n + " " + (n+1) + " " + (n+2) + " PUM");
    n = n + 4
    inicio++
}