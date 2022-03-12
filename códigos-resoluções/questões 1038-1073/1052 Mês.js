var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var M = parseInt(prompt(""));		
if (M == 1){
	console.log("January");
}
else if (M == 2){
	console.log("February");
}		
else if (M == 3){
	console.log("March");
}
else if (M == 4){
	console.log("April");
}
else if (M == 5){
	console.log("May");
}
else if (M == 6){
	console.log("June");
}
else if (M == 7){
	console.log("July");
}		
else if (M == 8){
	console.log("August");
}
else if (M == 9){
	console.log("September");
}
else if (M == 10){
	console.log("October");
}
else if (M == 11){
	console.log("November");
}
else if (M == 12){
	console.log("December");
}