var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
    
    var nmr = parseInt(prompt("Quantidade de jogadores"));
    var saida = [0, 0, 0];
    var saida1 = [0, 0, 0];
    var porcentagem = [];
    
    
    
    for (var i = 0; i < nmr; i++) {
        var nome = prompt("Digite o nome:");
        var tentativas = prompt("tentativas s/b/a").split(' ');  //saque bloqueio ataque
        var certo = prompt("tentativas que deram certo").split(' ');
    
    
        for (var j = 0; j < nmr; j++) {
            saida[j] += parseInt(tentativas[j]);
            saida1[j] += parseInt(certo[j]);
            }
    }
    
    for (var i = 0; i < nmr; i++) {
        porcentagem.push((saida1[i] / saida[i]) * 100);
    }
    
    console.log("Pontos de Saque: " + porcentagem[0].toFixed(2) + " %.");
    console.log("Pontos de Bloqueio: " + porcentagem[1].toFixed(2) + " %.");
    console.log("Pontos de Ataque: " + porcentagem[2].toFixed(2)  + " %.");