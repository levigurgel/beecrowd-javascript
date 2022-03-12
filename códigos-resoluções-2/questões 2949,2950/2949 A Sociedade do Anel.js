var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 var prompt = function(texto) { return lines.shift();};
    
        /* A - ANÕES 
           E - ELFOS
           H - HUMANOS 
           M - MAGOS
           X - HOBBITS
           */   

        var ContA = 0;
        var ContE = 0;
        var ContH = 0;
        var ContM = 0;
        var ContX = 0;


        var alistados = parseInt(prompt("Qntd. de alistados."))

        var i = 1 
        var contador = 0

        while(i <= alistados){
            var entrada = prompt("Nome e classe")
            var [nome,classe] = entrada.split(' ')

            var nome = (nome);
            var classe = (classe);


            if(classe == "A"){
                ContA++
            }

            if(classe == "E"){
                ContE++
            }

            if(classe == "H"){
                ContH++
            }

            if(classe == "M"){
                ContM++
            }

            if(classe == "X"){
                ContX++
            }

            i++
        }

        console.log(ContX + " Hobbit(s)")
        console.log(ContH + " Humano(s)")
        console.log(ContE + " Elfo(s)")
        console.log(ContA + " Anao(s)") 
        console.log(ContM + " Mago(s)")
