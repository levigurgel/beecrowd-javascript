var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

    var coelhos = 0;
    var ratos =  0;
    var sapos = 0;
    
    var qtde = parseInt(prompt("quantidade de testes"));
     for(i = 0 ; i<qtde ; i++){
     	var x = prompt("digite o valor");
     		var [a,b] = x.split(' ');
     			var a = parseInt(a);
     			var b = (b);
    
    			 if( b == "C"){
    			 	coelhos += a;
    			 }
    			 else if( b == "R"){
    			 	ratos += a;
    			 }
    			else if(b == "S"){
    				sapos += a;
    			}
     }
    
    var soma = parseFloat(coelhos + ratos + sapos);	
    var perccoelhos = parseFloat((coelhos*100)/soma);
    var percratos = parseFloat((ratos*100)/soma);
    var percsapos = parseFloat((sapos*100)/soma);
    var percsapos = parseFloat((sapos*100)/soma);
    console.log("Total: "+ soma+" cobaias\nTotal de coelhos: "+coelhos+"\nTotal de ratos: "+ratos+"\nTotal de sapos: "+sapos);
    console.log("Percentual de coelhos: "+perccoelhos.toFixed(2)+" %\nPercentual de ratos: "+percratos.toFixed(2)+" %\nPercentual de sapos: "+percsapos.toFixed(2)+" %");