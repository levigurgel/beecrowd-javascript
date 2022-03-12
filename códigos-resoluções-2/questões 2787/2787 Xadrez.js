var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };


	/*par/impar : preto
	par/par : branco
	impar/impar : branco
	impar/par : preto
	branco -> 1
	preto -> 0 */
	
	var linhas = parseInt(prompt("numero de linhas"));
	var colunas = parseInt(prompt("numero de colunas"));

	if(linhas%2 == 0 && colunas%2 != 0){ // par/impar
		console.log("0");
	}

	if(linhas%2 == 0 && colunas%2 == 0){ // par/par
		console.log("1");
	}

	if(linhas%2 != 0 && colunas%2 != 0){ // impar/impar
		console.log("1");
	}

	if(linhas%2 != 0 && colunas%2 == 0){ // impar/par
		console.log("0");
	}