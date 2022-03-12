var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var xy = prompt(" ")
var [X,Y] = xy.split(" ")

var X = parseFloat(X)
var Y = parseFloat(Y)

if(X == 0 && Y == 0) {
    console.log("Origem")
    }

else if(X == 0 && Y != 0) {
    console.log("Eixo Y")
    }

else if(X != 0 && Y == 0){
    console.log("Eixo X")
    }

else if(X > 0 && Y > 0) {
    console.log("Q1")
    }

else if(X < 0 && Y > 0) {
    console.log("Q2")
    }

else if(X < 0 && Y < 0) {
    console.log("Q3")
    }

else if(X > 0 && Y < 0) {
    console.log("Q4")
    }