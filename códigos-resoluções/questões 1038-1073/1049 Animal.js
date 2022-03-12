var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var P1 = prompt("vertebrado ou invertebrado");
if (P1 === "invertebrado"){
	P2 = prompt("inseto ou anelideo?");
	if (P2 === "inseto"){
		P3= prompt("hematofago ou herbivoro?");
			  		
		if (P3 === "hematofago") {
			console.log("pulga");
		}
		else if (P3 === "herbivoro"){
			console.log("lagarta");
		}
	}
	else if (P2 === "anelideo") {
		P3 = prompt("hematofago ou onivoro?");
		if (P3 === "hematofago") {
			console.log("sanguessuga");
		}
		else if (P3 === "onivoro"){
			console.log("minhoca");
		}
	}
}
if (P1 === "vertebrado") {
	P2 = prompt("ave ou mamifero?");
	if (P2 === "ave") {
		P3 = prompt("carnivoro ou onivoro?");
		if (P3 === "carnivoro") {
			console.log("aguia");
		}
		else if (P3 === "onivoro") {
			console.log("pomba");
		}
	}
	else if (P2 === "mamifero") {
		P3 = prompt("herbivoro ou onivoro?");
			  		
		if (P3 === "herbivoro") {
			console.log("vaca");
		}
		else if (P3 === "onivoro"){
			console.log("homem");
		}
	}
}