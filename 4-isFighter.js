const data = require('./database');

// Crie uma função que verifica em todos os personagens se possuem poderes ou não. Então, adiciona a propriedade isFighter com o valor true (para quando tiver poderes) ou false (quando não tiver poderes). Por fim, a função deve retornar o array atualizado.

const isFighterForEach = () => {
  data.characters.forEach(char => {
    char.isFighter = char.powers.length > 0 && char.powers[0] !== 'Unknown' ? true : false;
  });
  return data.characters;
};

console.log(isFighterForEach());