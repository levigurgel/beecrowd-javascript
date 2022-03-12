var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
  
  var n1 = 0;
  var n2 = 1;
  var contador = 0;
  var na = 0;
  var saida = "0 1";
  var entrada = parseInt(prompt());
  var limite = entrada - 2;
  
  while (contador < limite) {
      na = n1 + n2;
      n1 = n2;
      n2 = na;
      saida = saida + " " + na;
      contador = contador + 1;
      
  }
  if (limite == -1){
      saida = "0";
  }
  console.log(saida)