var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var x = parseInt(prompt("Valor X"));
    var y = parseInt(prompt("Valor Y"));
    var soma = 0;
    var aux;
    
    if (x > y) {
        aux = x;
        x = y;
        y = aux;
    }
    if ( x % 2 != 0) {
        for (i = x+2; i < y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }
    else {
        for (i = x + 1; i < y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }
    console.log(soma);