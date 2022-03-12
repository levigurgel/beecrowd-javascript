var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var a = parseInt(prompt("Digite o primeiro número: "));
    var b = parseInt(prompt("Digite o segundo número: "));
    
    var x = a * b;
        
    console.log("PROD = " + x);