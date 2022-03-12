var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var tempo = parseInt(prompt("Insira o tempo gasto na viagem (em horas):"));
    var velocidade = parseInt(prompt("Digite a velocidade (em km/h): "));

    var distancia = velocidade * tempo;
    var consumo = distancia / 12;

    console.log(consumo.toFixed(3));