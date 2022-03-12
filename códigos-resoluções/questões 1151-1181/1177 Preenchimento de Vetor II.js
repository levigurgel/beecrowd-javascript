var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var rep = parseInt(prompt("digite o numero de repeticoes"));
	var i;
	var j = 0;

	while(j<1000){
		for( i = 0  ; i < rep ; i++){
			if(j>=1000){
				break;
			}
			console.log("N["+j+"] = "+i);
			j++;
		}
	}