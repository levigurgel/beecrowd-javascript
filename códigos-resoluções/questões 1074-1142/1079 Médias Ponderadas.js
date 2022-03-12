var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Limite = parseInt(prompt("Repetições"));
var X = 1;
while (X <= Limite) {
   
    var entrada = prompt ("Pontos");
    var [N1,N2,N3] = entrada.split(" ");
   
    var N1 = parseFloat(N1);
    var N2 = parseFloat(N2);
    var N3 = parseFloat(N3);

    var formula = (N1 * 2) + (N2 * 3) + (N3 * 5);
    var Resul = formula / 10;
    console.log (Resul.toFixed(1));
X++
}