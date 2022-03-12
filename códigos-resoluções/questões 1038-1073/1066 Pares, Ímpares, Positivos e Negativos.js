var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var quantidade = 5;
    var positivo = 0;
    var negativo = 0;
    var par = 0;
    var impar = 0;

    while(quantidade--){
        var numeros = parseInt(prompt("Digite um número: "));
        if(numeros < 0){
            negativo++;
        } else if(numeros > 0){
            positivo++;
        }
        if(numeros % 2 == 0){
            par++;
        }else{
            impar++;
        }
    }
    console.log(par + " valor(es) par(es)");
    console.log(impar + " valor(es) impar(es)");
    console.log(positivo + " valor(es) positivo(s)");
    console.log(negativo + " valor(es) negativo(s)");