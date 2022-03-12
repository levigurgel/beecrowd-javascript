var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var n = parseInt(prompt("Valor"));

var cem = parseInt(n / 100);

var cinquenta = n - (cem * 100);
var cinquentaB = parseInt(cinquenta / 50);

var vinte = cinquenta - (cinquentaB * 50);
var vinteB = parseInt(vinte / 20);

var dez = vinte - (vinteB * 20);
var dezB = parseInt(dez / 10);

var cinco = dez - (dezB * 10);
var cincoB = parseInt(cinco / 5);

var dois = cinco - (cincoB * 5);
var doisB = parseInt(dois / 2);

var um = dois - (doisB * 2);
var umB = um;

console.log(n);
console.log( cem + " nota(s) de R$ 100,00");
console.log( cinquentaB + " nota(s) de R$ 50,00");
console.log( vinteB + " nota(s) de R$ 20,00");
console.log( dezB + " nota(s) de R$ 10,00");
console.log( cincoB + " nota(s) de R$ 5,00");
console.log( doisB + " nota(s) de R$ 2,00");
console.log( umB + " nota(s) de R$ 1,00");