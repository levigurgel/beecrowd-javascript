var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var N = parseInt(prompt("Valor"));
var Inicio = 0;
N = N- 2;
if (N > 5 && N < 2000 ) {
    if (N % 2 == 0) {
        while (Inicio <= N){
            Inicio = Inicio + 2;
            var resultado = Inicio ** 2;
            console.log (Inicio + "^2 = " + resultado);
        }
    }else if(N % 2 == 1) {
        N = N - 1;
        while (Inicio <= N){
            Inicio = Inicio + 2;
            var resultado = Inicio ** 2;
            console.log (Inicio + "^2 = " + resultado);
        }
    }
}