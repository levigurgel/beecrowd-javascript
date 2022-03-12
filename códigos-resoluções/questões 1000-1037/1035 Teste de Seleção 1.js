var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("Insira o valor");
var [A, B, C, D] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
D = parseInt(D); 
 if(B > C)
 {
     if(D > A)
     {
        if((C + D) > (A + B))
        {
            if(C > 0 && D > 0)
            {
                if((A%2) == 0)
                {
                    console.log("Valores aceitos");
                }
                }
				else{
     console.log("Valores nao aceitos");
 }
            }
			else{
     console.log("Valores nao aceitos");
 }
        }
		else{
     console.log("Valores nao aceitos");
 }
     }
 else{
     console.log("Valores nao aceitos");
 }