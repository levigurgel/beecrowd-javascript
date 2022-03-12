var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var entrada = prompt ("Pontos");
var [A,B,C] = entrada.split(" ");

var A = parseFloat(A);
var B = parseFloat(B);
var C = parseFloat(C);

if (A > 0 && B > 0 && C > 0){
    if ( A >= B && A >= C){
        if (A > (B + C)) {
        console.log("NAO FORMA TRIANGULO");
            }else {
                    if ((A*A) == (B*B) + (C*C)) {
                    console.log("TRIANGULO RETANGULO");
                     }
                    if ((A*A) > (B*B) + (C*C)) {
                    console.log("TRIANGULO OBTUSANGULO");
                    }
                    if ((A*A) < (B*B) + (C*C)) {
                       console.log("TRIANGULO ACUTANGULO"); 
                    }
                    if (A == B && B == C && C == A) {
                        console.log("TRIANGULO EQUILATERO");
                    }else if(A == B || B == C || C == A) {
                        console.log ("TRIANGULO ISOSCELES");
                    }

            
                       
    }
    }else if ( C >= B && C >= A){
        if (C >= (B + A)) {
        console.log("NAO FORMA TRIANGULO");
            }else {
                    if ((C*C) == (B*B) + (A*A)) {
                    console.log("TRIANGULO RETANGULO");
                     }
                    if ((C*C) > (B*B) + (A*A)) {
                    console.log("TRIANGULO OBTUSANGULO");
                    }
                    if ((C*C) < (B*B) + (A*A)) {
                       console.log("TRIANGULO ACUTANGULO"); 
                    }
                    if (A == B && B == C && C == A) {
                        console.log("TRIANGULO EQUILATERO");
                    }else if(A == B || B == C || C == A) {
                        console.log ("TRIANGULO ISOSCELES");
                    }

            
                       
    }
    }else if ( B >= C && B >= A){
        if (B >= (C + A)) {
        console.log("NAO FORMA TRIANGULO");
            }else {
                    if ((B*B) == (C*C) + (A*A)) {
                    console.log("TRIANGULO RETANGULO");
                     }
                    if ((B*B) > (C*C) + (A*A)) {
                    console.log("TRIANGULO OBTUSANGULO");
                    }
                    if ((B*B) < (C*C) + (A*A)) {
                       console.log("TRIANGULO ACUTANGULO"); 
                    }
                    if (A == B && B == C && C == A) {
                        console.log("TRIANGULO EQUILATERO");
                    }else if(A == B || B == C || C == A) {
                        console.log ("TRIANGULO ISOSCELES");
                    }

            
                       
    }
    }
}