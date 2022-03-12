var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var senhaerrada = parseInt(prompt("Insira a senha"))

    while(senhaerrada!=2002){
        console.log("Senha Invalida")
        
        var senhaerrada = parseInt(prompt("Insira a senha"));
    }
        console.log("Acesso Permitido")