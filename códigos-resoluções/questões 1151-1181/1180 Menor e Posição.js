var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var lidos = parseInt(prompt("qtde de numeros a serem lidos"));

	var analise = prompt("valores analisados");
	 var x = analise.split(' ');
	 var menor = x[0];
	 var posicao = 0;
	 for(i = 0; i < lidos ; i++ ){
	 	if(parseInt(x[i]) < parseInt(menor)){
	 		menor = x[i];
	 		posicao = i;
	 	}
	 }
    console.log("Menor valor: "+ menor);
    console.log("Posicao: "+ posicao);