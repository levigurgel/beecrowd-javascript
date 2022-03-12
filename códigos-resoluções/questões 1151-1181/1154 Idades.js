var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var cont = 0;
    var soma = 0;
    for(var i= 1; i >= 0; i++){
        var n = parseInt(prompt("Idades: "));
        if(n >= 0){
            cont++;
            soma = soma + n; //soma += n;
        }else{
            break;
        }
    }
    var media = soma / cont;
    console.log(media.toFixed(2));