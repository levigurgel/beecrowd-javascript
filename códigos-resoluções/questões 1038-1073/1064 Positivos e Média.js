var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var totalnum = 0;
    var total = 0;
    var media = 0;
    for(var cont = 1; cont <= 6; cont++){
        var numero = parseFloat(prompt("Digite um número: "));
        if(numero > 0){
            totalnum += 1;
            total += numero;  //+= significa atribuição de adição
        }
    }
    var media = total / totalnum;

    console.log(totalnum + " valores positivos");
    console.log(media.toFixed(1));