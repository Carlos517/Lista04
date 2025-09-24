const rs = require('readline-sync');
const nota = parseInt(rs.question("Digite a sua nota: "));

let resultado = (nota >= 7) ? 'Aprovado' : 'Reprovado';
console.log(resultado);