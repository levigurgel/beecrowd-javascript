var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
    

    var N = parseInt(prompt("X"));
    
    var ValorI = 2 - N;
   
    while (ValorI <= (10000 - N)) {
    if (N < 100000){
        ValorI = ValorI + N;
        console.log(ValorI);
    }
}
