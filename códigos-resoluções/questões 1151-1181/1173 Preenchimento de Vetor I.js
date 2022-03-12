var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

    var valor = parseInt(prompt("Insira um valor inicial"));
    var vetor = [];
    
    	for(i=0 ; i<10 ; i++){
    			
    			vetor[i] = valor;
    			console.log("N["+i+"] = "+vetor[i]);
    			valor= valor*2;
    	}