var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var Cont = 0;
    var Numero = 1;
    var S = 0;
    var resultado = 0;
    while (Cont < 100) {
        Cont++;
        S = Numero / Cont;
        resultado = resultado + S;
    }
    console.log(resultado.toFixed(2));