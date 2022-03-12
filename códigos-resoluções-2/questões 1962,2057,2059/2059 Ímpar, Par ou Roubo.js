var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var x = prompt("p/j1/j2/r/a");
	var [p,j1,j2,r,a] = x.split(' ');

		var p = parseInt(p);
		var j1 = parseInt(j1);
		var j2 = parseInt(j2);
		var r = parseInt(r);
		var a = parseInt(a);

		var soma = j1+j2;

		if(r == 0 && a == 0){
			if(soma%2 == 0 && p == 1){
				console.log("Jogador 1 ganha!");
			}

			else if(soma%2 == 0 && p == 0){
				console.log("Jogador 2 ganha!");
			  } 

			else if(soma%2 != 0 && p == 1){
				console.log("Jogador 2 ganha!");
			}

			else if(soma%2 != 0 && p == 0){
				console.log("Jogador 1 ganha!");
			}
		}
		else if(r == 1 && a == 0){
			console.log("Jogador 1 ganha!");
		}

		else if(r == 1 && a == 1){
			console.log("Jogador 2 ganha!");

		}

		else if(r == 0 && a == 1){
			console.log("Jogador 1 ganha!");
		}