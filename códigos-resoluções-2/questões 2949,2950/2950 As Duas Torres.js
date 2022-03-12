var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};   
    
    var entradas = prompt("n x y")
    var [distancia, diametro1, diametro2] = entradas.split(' ');

    distancia = parseInt(distancia);
    diametro1 = parseInt(diametro1);
    diametro2 = parseInt(diametro2);

    var distancia = (distancia)
    var diametro1 = (diametro1)
    var diametro2 = (diametro2)

    console.log((distancia / (diametro1 + diametro2)).toFixed(2))