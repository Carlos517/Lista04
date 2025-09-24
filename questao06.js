const rs = require('readline-sync');

let usuario = rs.question('Usuário: ');
let senha = rs.question('Senha: ');

const usuarioCorreto = 'carlos123';
const senhaCorreta = '251241';

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  console.log('Acesso permitido');
} else {
  console.log('Acesso negado');
}