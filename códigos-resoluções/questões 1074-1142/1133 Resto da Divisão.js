var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var X = parseInt(prompt("X"));
var Y = parseInt(prompt("Y"));

if (Y > X) { 
    var i = X + 1;
    var f = Y - 1;
}else 
if (X > Y) { 
    var i = Y + 1;
    var f = X - 1;
}



while ( i <= f) {
    if (i % 5 == 2 || i % 5 == 3) {
        console.log(i);
    }
i++
}