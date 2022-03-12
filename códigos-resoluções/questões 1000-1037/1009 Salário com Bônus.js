var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var nome = prompt("Escreva o nome do funcionário: "); 
    var salario = parseFloat(prompt("Escreva o salário fixo: "));
    var vendas = parseFloat(prompt("Digite o total de vendas realizadas: "));
    var total = (((vendas * 15) / 100) + salario);
    
    console.log ("TOTAL = R$ " + total.toFixed(2));