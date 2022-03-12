var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var Cont = 1;
    var Numero = 1;
    var S = 0;
    var resultado = 0;
    while (Numero <= 39) {
        Cont = Cont * 2;
        Numero = Numero + 2;
        S = Numero / Cont;
        resultado = resultado + S;
    }
    var R = resultado + 1;
    console.log(R.toFixed(2));