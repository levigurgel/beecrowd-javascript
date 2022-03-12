var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var N = 1;
    var ContA = 0;
    var ContG = 0;
    var ContD = 0;
    while ( N != 4){
      N = parseInt(prompt("Tipo de Gasolina"));
      if (N == 1 ) {
        ContA++
      }else if (N == 2 ) {
        ContG++
      }else if (N == 3 ) {
        ContD++
      }
    }
    console.log("MUITO OBRIGADO");
    console.log("Alcool: " + ContA);
    console.log("Gasolina: " + ContG);
    console.log("Diesel: " + ContD);