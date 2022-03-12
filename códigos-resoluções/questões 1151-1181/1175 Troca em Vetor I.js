var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

    var i;
    var j;
    var vetor = [];
    var vet = [];
    
    for(i = 0 ; i<20 ; i++){
    	vetor.push(prompt("digite"));
    }
    
    	for(j = 0 ; j<20 ; j++){
    		vetor[(vetor.length-1)-j];
    			vet.push(vetor[(vetor.length-1)-j]);
    				console.log("N["+j+"] = "+vet[j]);
    	}