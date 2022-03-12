var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("digite o valor");
var [A, B, C] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);

if ( A < B && A < C) {
console.log (A);
}
else if (B < C && B < A) {
console.log (B);
}
else if (C < A && C < B) {
console.log (C);
}

if (A < B && A > C || A < C && A > B) {
console.log (A);
}
else if (B < C && B > A || B < A && B > C) {
console.log (B);
}
else if (C < A && C > B || C < B && C > A) {
console.log (C);
}

if ( A > B && A > C) {
console.log (A);
}
else if (B > C && B > A) {
console.log (B);
}
else if (C > A && C > B) {
console.log (C);
}

console.log ("")
console.log (A);
console.log (B);
console.log (C)