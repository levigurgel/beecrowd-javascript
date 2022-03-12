var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
    
    var vetpar = [];
    var vetimpar = [];
    var i;
    var j = 0;
    var k = 0;
    var z;
    var a;
    	
    for(i = 0; i<15 ; i++){
    	
    	var n =  parseInt(prompt("digite um numero"));
    	
    	if(n%2===0){
    			vetpar[j] = n;
    			j++;
    		if(j == 5){
    			j=0;
    			for(z = 0; z<5 ; z++){
    				console.log("par["+z+"] = "+ vetpar[z]);
    			}		
    		}
    	}	
    	else{
    		vetimpar[k] = n;
    		k++;
    			if(k == 5){
    			   k = 0;
    			   for(a = 0; a<5 ; a++){
    					console.log("impar["+a+"] = "+vetimpar[a]);
    			   }			
    			}
    	}
    }	
    for( i = 0; i < k ; i++){
    	console.log("impar["+i+"] = "+vetimpar[i]);
    }
    for( i = 0; i < j ; i++){
    	console.log("par["+i+"] = "+vetpar[i]);
    }