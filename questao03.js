const rs = require('readline-sync');

const c = parseFloat(rs.question("Digite o seu valor em Celsius para transformar: "));
const f = parseFloat(rs.question("Digite o valor em Fahrenheit para transformar: "));

const cResul = (f - 32) / 1.8;
const fResul = c * 1.8 + 32;

console.log("O valor de Celsius para Fahrenheit será: " + fResul.toFixed(2));
console.log("O valor de Fahrenheit para Celsius será: " + cResul.toFixed(2));
