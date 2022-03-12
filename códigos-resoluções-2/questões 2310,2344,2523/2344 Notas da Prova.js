var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var nota = parseInt(prompt("digite a nota do aluno"));

	if(nota === 0){
		console.log("E");
	}

	if(nota >= 1 && nota <= 35){
		console.log("D");
	}

	if(nota >= 36 && nota <= 60){
		console.log("C");
	}

	if(nota >= 61 && nota <= 85){
		console.log("B");
	}

	if(nota >= 86 && nota <= 100){
		console.log("A");
	}