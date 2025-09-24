const rs = require('readline-sync');

let a = parseFloat(rs.question('Digite o primeiro número: '));
let b = parseFloat(rs.question('Digite o segundo número: '));
let c = parseFloat(rs.question('Digite o terceiro número: '));

if (a > b && a > c) {
    console.log('Maior:', a);
  } else if (b > c) {
    console.log('Maior:', b);
  } else {
    console.log('Maior:', c);
  }