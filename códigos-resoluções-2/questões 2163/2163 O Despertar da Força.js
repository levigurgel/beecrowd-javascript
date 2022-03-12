var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

var matriz = [];
var check = false;
var armazenalinha = 0;
var armazenacoluna = 0;

	var q = prompt("linhas e colunas");
		var [a,b] = q.split(" ");
			a = Number(a);
			b = Number(b);

while (a < 3) {
    q = prompt("Linhas maior que 3");
    var  [a,b] = q.split(" ");
        a = Number(a);
        b = Number(b);
}

    
    for (var i = 0; i < a; i++) {
        colunas = prompt("linhas");
        	y = colunas.split(" ");
        for(var j = 0; j < y.length; j++) {
            y[j] = Number(y[j]);
        }
        matriz.push(y);
    }
    a--;
    b--;

    for (var i = 1; i < a; i++) {
        for (var j = 1; j < b; j++) {
            if (matriz[i][j] == 42) {
            	check = true;
					if(check === true){
						if(matriz[i-1][j-1] == 7){  //diagonal superior esquerda
							if(matriz[i-1][j] == 7){ //superior
								if(matriz[i-1][j+1] == 7){ //diagonal superior direita
									if(matriz[i][j-1] == 7){ //esquerda
										if(matriz[i][j+1] == 7){ //direita
											if(matriz[i+1][j-1] == 7){ //diagonal inferior esquerda
												if(matriz[i+1][j] == 7){ //embaixo
													if(matriz[i+1][j+1] == 7){ //diagonal inferior direita
													armazenalinha = i;
													armazenacoluna = j;
													}
												}	
											}	
										}
									}
								}
							}
						}		
					}
				}               
	        }
	    }
    

    if (armazenalinha === 0 && armazenacoluna === 0) {
        console.log(armazenalinha + " " + armazenacoluna);
    }

    else {
        console.log((armazenalinha + 1) + " " + (armazenacoluna + 1));
    }