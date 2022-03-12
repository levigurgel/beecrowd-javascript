var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var dados = prompt("Digite, respectivamente: Código da Peça 1 / Quantidade / Valor unitário")
    var dados2 = prompt("Digite respectivamente: Código da Peça 2 / Quantidade / Valor unitário")

    var [a,b,c] = dados.split(' ')
    a = parseInt(a)
    b = parseInt(b)
    c = parseFloat(c)

    var [x,y,z] = dados2.split(' ')
    x = parseInt(x)
    y = parseInt(y)
    z = parseFloat(z)

    var valorTotal = ((b * c) + (y * z))

    console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2))