var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
	
	var i;
	var vet = [];

	var arredonda = function (x) {
    var y = x.toFixed(6);
	
    if (y.charAt(y.length - 2) == '5' && y.charAt(y.length - 1) == '0') {
        var aux = y.split('');
        aux[y.length - 2] = '0';
        y = parseFloat(aux.join(''));
    } else {
        y = x.toFixed(4);
    }

	return y;
};

	var valor = parseFloat(prompt("digite um valor"));
	vet[0] = valor;
	console.log("N[0] = "+arredonda(vet[0]));
	
	for(i = 1 ; i<100 ; i++){
		
		valor = valor/2;
		vet[i] = valor;

	console.log("N["+i+"] = "+arredonda(vet[i]))
	}