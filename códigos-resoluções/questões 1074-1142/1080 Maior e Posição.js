var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

  var T = 0;
  var i = 0;
  var cont1 = 0;
  var fixo = 0;
  while (i < 100) {
    var N = parseInt(prompt("Numero"));
      if (N > fixo) {
      fixo = N;
      
      T = i + 1;
      }
       i++;
  }
  console.log(fixo);
  console.log(T);