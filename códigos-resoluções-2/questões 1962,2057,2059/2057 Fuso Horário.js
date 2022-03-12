var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var entrada = prompt("Digite a hora de saída, horas de viagem e fuso: ");
    var [h, hv, fuso] = entrada.split(" ");
    h = parseInt(h);
    hv = parseInt(hv);
    fuso = parseInt(fuso);

    var total = h + hv + fuso;
    if(total < 0){
        total = 24 + total;
    }
    var total1 = total%24;
    console.log(total1);