const rs = require('readline-sync');

let num1 = parseFloat(rs.question('Digite o primeiro número: '));
let num2 = parseFloat(rs.question('Digite o segundo número: '));
let op = rs.question('Digite a operação (+, -, *, /, %): ');

let resultado;

switch (op) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = 'Erro: divisão por zero.';
    }
    break;
  case '%':
    resultado = num1 % num2;
    break;
  default:
    resultado = 'Operação inválida.';
}

console.log('Resultado:', resultado);
