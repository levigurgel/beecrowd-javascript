var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var Par = 0;
    while(Par <= 98) {
        Par = Par + 2;
        console.log(Par);
    }