const data = require('./database');

// Crie uma função que verifica em todos os personagens se possuem poderes ou não. Então, adiciona a propriedade isFighter com o valor true (para quando tiver poderes) ou false (quando não tiver poderes). Por fim, a função deve retornar o array atualizado.

const isFighter = () => {
  return data.characters.map((character) => {
    // if (character.powers.length !== 0) {
    //   character.isFighter = true;
    // } else {
    //   character.isFighter = false;
    // }
    character.isFighter = character.powers.length !== 0 ? true : false;
    return character;
  });
};

console.log(isFighter());

const isFighterForEach = () => {
  const modifiedCharacters = [];

  data.characters.forEach((character) => {
    character.isFighter = character.powers.length !== 0 ? true : false;
    modifiedCharacters.push(character);
  });

  return modifiedCharacters;
};

console.log(isFighterForEach());