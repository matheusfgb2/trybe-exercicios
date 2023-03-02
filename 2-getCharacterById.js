const data = require('./database');

// Crie uma função que busca o personagem de acordo com seu id.

const getCharacterById = (id) => {
  // for (let character of data.characters) {
  //   if (character.id === id) {

  //   }
  // }

  return data.characters.find((character) => character.id === id);
};

console.log(getCharacterById(8));
