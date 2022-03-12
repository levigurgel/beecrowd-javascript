var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

        var contador = 0;
        for(var i = 1; i <= 5; i++){
            var numero = parseInt(prompt("Digite um número: "));
            if(numero % 2 == 0){
                contador++;
            }
        }
            console.log(contador + " valores pares");