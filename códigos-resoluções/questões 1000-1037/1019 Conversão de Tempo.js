var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valor = parseInt(prompt("Intervalo de tempo dado em segundos: "));
    var horas = parseInt(valor / 3600);
    var valor2 = valor - (horas * 3600); 
    var minutos = parseInt(valor2 / 60);
    var valor3 = valor2 - (minutos * 60);
    var segundos = valor3;
    
    console.log(horas + ":" + minutos + ":" + segundos);