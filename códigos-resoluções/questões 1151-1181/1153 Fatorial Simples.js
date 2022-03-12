var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    function fatorial(n) {
        var fat = 1;

        for (var i = 1; i <= n; i++) {
            fat = fat * i;
        }
        return fat;
    }

    var x = parseInt(prompt("Digite um número: "));
    var resultado = fatorial(x);
    console.log(resultado);