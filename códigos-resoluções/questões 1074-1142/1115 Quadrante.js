var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

 

    while (X != 0 || Y != 0) {
        var entrada = prompt ("Pontos");
        var [X,Y] = entrada.split(" ");
        
        var X = parseInt(X);
        var Y = parseInt(Y);
        if (X > 0 && Y < 0) {
        console.log("quarto")
    }else if (X > 0 && Y > 0) {
        console.log("primeiro")
    }else if (X < 0 && Y < 0) {
        console.log("terceiro")
    }else if (X < 0 && Y > 0) {
        console.log("segundo")
    }  
    var X = parseInt(X);
    var Y = parseInt(Y);
}