var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
    
    var vetor = [];
    	for(i = 0 ; i<10 ; i++){
    		vetor[i] = parseInt(prompt("Insira os valores"));
    			if(vetor[i] <= 0){
    				vetor[i] = 1;
    			}
    	console.log("X["+i+"] = "+vetor[i]);
    }