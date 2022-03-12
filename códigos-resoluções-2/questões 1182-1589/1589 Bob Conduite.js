var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var testes = parseInt(prompt("número de testes"));

	for( i = 0 ; i < testes ; i++){
		var x = prompt("r1 e r2");
		var [a,b] = x.split(' ');
			a = parseInt(a);
			b = parseInt(b);
			var aaa = a+b;
			console.log(aaa);
	}