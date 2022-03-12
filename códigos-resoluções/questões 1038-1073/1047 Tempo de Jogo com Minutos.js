var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var valores =prompt("Insira o valor:");
var [A, B, C, D] = valores.split(" ");
A = parseInt(A);
B = parseInt(B);
C = parseInt(C);
D = parseInt(D); 

if (A == C){	
	if (B < D){
		console.log("O JOGO DUROU 0 HORA(S) E " + (D - B) + " MINUTO(S)");
}
		else if (B > D) {				
			console.log("O JOGO DUROU 23 HORA(S) E " + (60 - (B - D)) + " MINUTO(S)");
}
		else if (B == D) {
			console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}
}
else if (A > C) {
	if ( ((A - C)+ 24) >= 24) {
		if (B < D) {
			console.log("O JOGO DUROU " + (24 - (A - C)) + " HORA(S) E " + (D - B) + " MINUTO(S)");
}
		else if (B > D) {	
			console.log("O JOGO DUROU " + ((24 - (A - C)) - 1) + " HORA(S) E " + (60-(B - D)) + " MINUTO(S)");
}
		else if (B == D) {
			console.log ("O JOGO DUROU " + (24 - (A - C)) + " HORA(S) E 0 MINUTO(S)");
}
}
	else {	
		if (B < D) {
			console.log("O JOGO DUROU " + (24 - (A - C)) + " HORA(S) E " + (D - B) + " MINUTO(S)");
}
		else if (B > D) {
			console.log("O JOGO DUROU " + ((24 - (A - C) - 1)) + " HORA(S) E " + (B - D) + " MINUTO(S)");
}
		else if (B == D) {
			console.log("O JOGO DUROU " + (24 - (A - C)) + " HORA(S) E 0 MINUTO(S)");
}
}
}
else if (A < C) {

	if (B < D) {
		console.log("O JOGO DUROU " + (C - A) + " HORA(S) E " + (D - B) + " MINUTO(S)");
}
	else if (B > D) {
		console.log("O JOGO DUROU " + ((C - A)-1) + " HORA(S) E " + (60 - (B - D)) + " MINUTO(S)");
}
	else if (B == D) {
		console.log("O JOGO DUROU " + (C - A) + " HORA(S) E 0 MINUTO(S)");
}
}