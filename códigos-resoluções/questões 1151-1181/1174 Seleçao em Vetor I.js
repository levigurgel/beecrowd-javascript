var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

    var vet = [];
    
    	for( i = 0 ; i<100 ; i++ ){
    		vet[i] = parseFloat(prompt("digite o valor"));
    		if( vet[i] <= 10){
    			console.log("A["+i+"] = "+vet[i].toFixed(1));
    		}
    	}