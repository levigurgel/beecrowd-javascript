var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var  n = parseInt(prompt("digite o numero de analises"));
	var atual = 2015;

	for(i = 0; i < n ; i++){
		var ano = parseInt(prompt("quanto tempo"));
		var resultado = (atual - ano);
			if(resultado < 0 || resultado == 0){
				console.log(Math.abs(resultado-1)+" A.C.");
			} else{
				console.log(resultado + " D.C.");
			}
	}