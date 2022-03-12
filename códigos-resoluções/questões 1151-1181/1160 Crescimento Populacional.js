var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift(); };
	
	var testes =  parseInt(prompt("nmr de testes"));

	var anos = 0;


for(i = 0 ; i < testes ; i++){
	var pop = prompt("");
		var [pa,pb,g1,g2] = pop.split(' ');
		pa = parseInt(pa);
		pb = parseInt(pb);
		g1 = parseFloat(g1);
		g2 = parseFloat(g2);

		while(pa <= pb && anos <= 100){
			pa = Math.trunc((pa+(pa*g1)/100));
			pb = Math.trunc((pb+(pb*g2)/100));
			anos++;
		}
		if(anos > 100){
			console.log("Mais de 1 seculo.");
		} else{
			console.log(anos + " anos.");
		  }
		  anos = 0;
}