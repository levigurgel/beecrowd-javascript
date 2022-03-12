var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var nota1 = parseFloat(prompt("Primeira nota: "));
    var nota2 = parseFloat(prompt("Segunda nota: "));
    var nota3 = parseFloat(prompt("Terceira nota: "));
    
    var resultado = (nota1*2 + nota2*3 + nota3*5)/10;
        
    console.log("MEDIA = " + resultado.toFixed(1));
