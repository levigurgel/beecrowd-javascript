var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var S = (parseFloat(prompt(""))).toFixed(2);		
if (S <= 400) {	
	rea = 15.00;
}
else if (S > 400 && S <= 800) {
	rea = 12.00;
}
else if (S > 800 && S <= 1200) {
	rea = 10.00;
}
else if (S > 1200 && S <= 2000) {
	rea = 7.00;
}	
else {
	rea = 4.00;
}
var reaG = ((S*rea)/100);
var S2 = (S*(1+(rea/100)));
S2 = (parseFloat(S2).toFixed(2));
reaG = (parseFloat(reaG).toFixed(2));
console.log("Novo salario: " + S2);
console.log("Reajuste ganho: " + reaG);
console.log	("Em percentual: "+ rea + " %");