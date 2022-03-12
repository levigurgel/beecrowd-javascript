var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var x = prompt("Digite um  valor: ");
    var [a, b] = x.split(" ");
    
    var a2 = parseInt(a);
    var b2 = parseInt(b);
    
    while(a2 != b2){
        if(a2 > b2){
            console.log("Decrescente");
        } else{
            console.log("Crescente");
        }
        
        var x = prompt("Insira as variáveis: ");
        var [a, b] = x.split(" ");
        
        var a2 = parseInt(a);
        var b2 = parseInt(b);
    }