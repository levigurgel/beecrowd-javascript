var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Inicio = parseInt(prompt("Valor"));
Inicio = Inicio - 2;

if (Inicio % 2 == 0) {
    Inicio = Inicio + 1;
    var Limite = Inicio + 10;    
    while (Inicio <= Limite) {
            Inicio = Inicio + 2;
        console.log(Inicio);
        }
}else if (Inicio % 2 == 1) {
    var Limite = Inicio + 10;
    while (Inicio <= Limite) {
            Inicio = Inicio + 2;
            console.log(Inicio);
        }
}