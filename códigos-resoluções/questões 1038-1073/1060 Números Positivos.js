var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var i = 0;
    var contador = 0;
    var f = 6;
    while(i < f){
        var n = parseInt(prompt("Digite o número"));
        if(n > 0){
            contador++;
        }
        i++;
    }
    console.log(contador + " valores positivos");