var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')
var prompt = function(texto) { return lines.shift();};

    var funcionario = parseInt(prompt("Número do funcionário: "));
    var horas = parseInt(prompt("Quantidade de horas trabalhadas: "));
    var horasTrab = parseFloat(prompt("Valor que o funcionário recebe por hora trabalhada: "));

    var salario = horas * horasTrab;

    console.log("NUMBER = " + funcionario);
    console.log("SALARY = U$ " + salario.toFixed(2));
