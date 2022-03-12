var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var X = parseInt(prompt("Distância total percorrida: "));
    var Y = parseFloat(prompt("Total de combustível gasto: "));

    var consumo = X / Y;

    console.log(consumo.toFixed(3) + " km/l");