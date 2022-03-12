var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var variavel = 1;

while (variavel <= 1) {
    var X = parseFloat(prompt("Valor de x"));
    if (X >= 0 && X <= 10) {
        variavel++
    }else {
        console.log("nota invalida");
    }        
}
while (variavel <= 2) {
    var Y = parseFloat(prompt("Valor de Y"));
    if (Y >= 0 && Y <= 10) {
        variavel++
    }else {
        console.log("nota invalida");
    }  

}
var media = (X + Y) / 2;
  console.log("media = " + media.toFixed(2));