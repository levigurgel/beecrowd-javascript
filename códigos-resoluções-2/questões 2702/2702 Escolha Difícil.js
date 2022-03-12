var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

    var disponivel = prompt("Quantidade disponível");
    var [f1, b1, m1] = disponivel.split(" ");
    f1 = parseFloat(f1);
    b1 = parseFloat(b1);
    m1 = parseFloat(m1);

    var pedidos = prompt("Quantidade dos pedidos");
    var [f2, b2, m2] = pedidos.split(" ");
    f2 = parseFloat(f2);
    b2 = parseFloat(b2);
    m2 = parseFloat(m2);

    if(f1 < f2){
        var frango = f2 - f1;
    } else{
        var frango = 0;
    }
    if(b1 < b2){
        var bife = b2 - b1;
    }else{
        var bife = 0;
    }
    if(m1 < m2){
        var massa = m2 - m1;
    }else{
        var massa = 0;
    }

    var total = frango + bife + massa;
    console.log(total);