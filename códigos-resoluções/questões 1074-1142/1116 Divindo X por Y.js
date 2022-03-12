var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Limite = parseInt(prompt("Limte de Repetições?"));
var Inicio = 1;
while (Inicio <= Limite) {
    var entrada = prompt ("Pontos");
    var [X , Y] = entrada.split(" ");

    var X = parseInt(X);
    var Y = parseInt(Y);
  
    if (X != 0 && Y != 0) {
        var calculo = X / Y;
        console.log(calculo.toFixed(1));
    }else if(X == 0 && Y != 0) {
        console.log ("0.0")
    }else if(Y == 0 && X != 0) {
        console.log("divisao impossivel");
    }
    Inicio++
}