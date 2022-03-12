var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

	var x = prompt("digite os valores");
		var [a,b,c] = x.split(' ');
			var a = parseFloat(a);
			var b =  parseFloat(b);
			var c =  parseFloat(c);

	var triangulo = (a*c)/2;
	var pi = 3.14159;
	var circulo = pi*(Math.pow(c,2));
	var trapezio = ((a+b)*c)/2;
	var quadrado =  Math.pow(b,2);
	var retangulo = a*b;

	console.log("TRIANGULO: "+triangulo.toFixed(3));
	console.log("CIRCULO: "+circulo.toFixed(3));
	console.log("TRAPEZIO: "+trapezio.toFixed(3));
	console.log("QUADRADO: "+quadrado.toFixed(3));
	console.log("RETANGULO: "+retangulo.toFixed(3));