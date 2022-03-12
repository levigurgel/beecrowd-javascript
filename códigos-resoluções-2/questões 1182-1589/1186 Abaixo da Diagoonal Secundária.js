var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

    var resultado = 0;
    var i;
    var j;
    var matriz = [];
    var sm = prompt("soma ou media");
    var z = 11;
    
    		for(i = 0 ; i <= 11 ; i++){
    			matriz[i] = [];
    		}
    			for(i = 0 ; i <= 11 ; i++){
    				for(j = 0 ; j <= 11 ; j++){
    						matriz[i][j] = parseFloat(prompt("valor"));
    				}
    			}
    			
    			for( i = 0 ; i <= 11 ; i++){
    			    for( j = 0 ; j <= 11;  j++){
    						if(z < j){
    							resultado += (matriz[i][j]);
    						}									
    			    }
    			z--;
    			}
    		
    		if( sm == "S"){
    			console.log(resultado.toFixed(1));
    		}
    
    		if(sm == "M"){
    			console.log(((resultado)/66).toFixed(1));
    		}