var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var valor = parseInt(prompt("Insire a idade (em dias): "));
    var anos = parseInt(valor / 365);
    valor = valor % 365;
    var meses = parseInt(valor / 30);
    valor = valor % 30;
    var dias = valor % 30; 
    console.log(anos + " ano(s)\n" + meses + " mes(es)\n" + dias + " dia(s)");