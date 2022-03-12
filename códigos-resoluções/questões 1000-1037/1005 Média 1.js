var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var nota1 = parseFloat(prompt("Primeira nota: "));
    var nota2 = parseFloat(prompt("Segunda nota: "));
    
    var resultado = (nota1*3.5 + nota2*7.5)/11.0;
        
    console.log("MEDIA = " + resultado.toFixed(5));