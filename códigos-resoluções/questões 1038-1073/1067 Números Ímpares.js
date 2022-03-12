var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Limite = parseInt(prompt("Valor"));
var Inicio = -1;
    while (Inicio <= (Limite - 2)){
        Inicio = Inicio + 2;
        console.log(Inicio);
}

