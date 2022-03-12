var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };

 
 var letras = prompt("alfabeto");
        while(letras !== ""){
           letras = letras.toUpperCase();
           var alfa = [];
            x = [];
             var letras1 = "";
               for(var i = 0; i < letras.length;i++){
                  alfa.push(letras.charAt(i));
                }
                   var qtde = parseInt(prompt("qtde"));
                   var lampadas = prompt("lampadas");
                    var x = lampadas.split(" ");         
                     letras1 = alfa[x[0]-1];

       for(letras = 1; letras < qtde; letras++){
         letras1 = letras1.concat(alfa[x[letras]-1]);
          }

      console.log(letras1);

                  letras = prompt("alfabeto");
}