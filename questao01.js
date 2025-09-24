const rs = require('readline-sync');
const idade = parseInt(rs.question("Digite a sua idade: "));


if (idade >= 0 && idade <= 12) {
console.log ('Você é uma criança.')
} else if (idade >=13 && idade <= 17  ) {
    console.log('Adolescente');
  } else if (idade >17 && idade <= 59) {
    console.log('Adulto');
  } else {
    console.log('Idoso');
  }

