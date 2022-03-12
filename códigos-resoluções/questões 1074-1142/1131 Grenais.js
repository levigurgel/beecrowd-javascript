var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var resp = 1;
    var grenal = 0;
    var vitoriasGremio = 0;
    var vitoriasInter = 0;
    var empate = 0;

    while(resp == 1){

    grenal++;

    var gol = prompt();
    var [x, y] = gol.split(" ");

    var x = parseInt(x); // gols do Inter
    var y = parseInt(y); // gols do Gremio

    if(x > y){
        vitoriasInter++;
    }
    else if(x < y){
        vitoriasGremio++;
    }
    else if(x == y){
        empate++;
    }

    console.log("Novo grenal (1-sim 2-nao)");

    resp = parseInt(prompt("Novo grenal (1-sim 2-nao)"));

    }

    console.log(grenal + " grenais");
    console.log("Inter:" + vitoriasInter);
    console.log("Gremio:" + vitoriasGremio);
    console.log("Empates:" + empate);

    if(vitoriasInter > vitoriasGremio){
        console.log("Inter venceu mais");
    }
    else if(vitoriasInter < vitoriasGremio){
        console.log("Gremio venceu mais");
    }
    else if(vitoriasInter == vitoriasGremio){
        console.log("Nao houve vencedor");
    }
