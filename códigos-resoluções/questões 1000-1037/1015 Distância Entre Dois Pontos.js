var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var eixoX = prompt("Digite o valor de X1 e Y1")
    var [x1,y1] = eixoX.split(" ")
    x1 = parseFloat(x1)
    y1 = parseFloat(y1)

    var eixoY = prompt("Digite o valor de X2 e Y2")
    var [x2,y2] = eixoY.split(" ")
    x2 = parseFloat(x2)
    y2 = parseFloat(y2)

    var calculo = Math.pow((x2 - x1),2) + Math.pow((y2- y1),2)
    var distancia = Math.sqrt(calculo)

    console.log(distancia.toFixed(4))