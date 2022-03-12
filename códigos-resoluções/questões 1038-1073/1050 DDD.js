var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var D = parseInt(prompt("DDD"));
if (D == 61) {
	console.log("Brasilia");
}
else if (D == 71) {
	console.log("Salvador");
}
else if (D == 11) {
	console.log("Sao Paulo");
}
else if (D == 21) {
	console.log("Rio de Janeiro");
}
else if (D == 32) {
	console.log("Juiz de Fora");
}
else if (D == 19) {
	console.log("Campinas");
}
else if (D == 27) {
	console.log("Vitoria");
}
else if (D == 31) {
	console.log("Belo Horizonte");
}
else {
	console.log("DDD nao cadastrado");
}
