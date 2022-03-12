var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var valores =prompt("digite o valor");
var [A, B, C, D] = valores.split(" ");
N1 = parseFloat(A);
N2 = parseFloat(B);
N3 = parseFloat(C);
N4 = parseFloat(D); 

var media = ((N1*2) + (N2*3) + (N3*4) + N4) / 10
console.log("Media: " + media.toFixed(1))

if (media >= 7) {
	console.log("Aluno aprovado.")
}
else if(media < 5) {
	console.log("Aluno reprovado.")
}
else {
  console.log("Aluno em exame.")
var exame = parseFloat(prompt(" "))
    console.log("Nota do exame: " + exame.toFixed(1))
var FinalM = (media + exame)/2

if(FinalM >= 5) {
    console.log("Aluno aprovado.")
    console.log("Media final: " + FinalM.toFixed(1))
    }

else{
    console.log("Aluno reprovado.")
    console.log("Media final: " + FinalM.toFixed(1))
    }
    }