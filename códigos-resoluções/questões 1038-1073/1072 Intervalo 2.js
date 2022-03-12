var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

  var repete = parseInt(prompt("Quantas vezes!"));
  var i = 0;
  var cont1 = 0;
  var cont2 = 0;
  
  while (i < repete) {
    var N = parseInt(prompt("Numero"));

    if (N <=20 && N >= 10) {
      cont1++;
    }
    if (N > 20 || N < 10) {
      cont2++;
    }
    i++;
  }
    console.log(cont1 + " in");
    console.log(cont2 + " out");