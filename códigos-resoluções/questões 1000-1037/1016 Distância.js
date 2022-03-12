var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


    var km = parseInt(prompt("Distância (em km): "));
    var minutos = (60 * km) / 30;

    console.log(minutos + " minutos");