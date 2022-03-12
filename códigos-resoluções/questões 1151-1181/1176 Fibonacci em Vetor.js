var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
    
    var i;
    var a = 0; 
    var b = 1;
    var c = 0; 
    var fibonacci = [0,1]; 

	while(c>=0){
        a = a + b;
    	b = a + b; 
    		c++;
    		fibonacci.push(a);
    	    if(c == 30){
    		break;
    		}
    	
    		fibonacci.push(b);
    				}
    		            var rep = parseInt(prompt("numero de repeticoes"));
    					for(i=0 ; i<rep ; i++){
    					var termo = parseInt(prompt("digite um termo"));											
    						console.log("Fib("+termo+") = "+fibonacci[termo]);
    								}