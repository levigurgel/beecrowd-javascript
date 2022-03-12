var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


    var N = parseInt(prompt("Digite um número: "));
    for (var i = 0; i < N; i++) {
        var X = parseInt(prompt("X"));
        if (X == 1 || X == 2) {
            console.log(X + " eh primo");
        } else if (X > 2) {
            for (var j = 2; j < X; j++) {
                if (X % j == 0) {
                    var k = 2;
                    break;
                } else {
                    k = 1;
                }
            }
        }
        if(k == 2){
            console.log(X + " nao eh primo");
        } else if(k == 1){
            console.log(X + " eh primo");
        }
    }