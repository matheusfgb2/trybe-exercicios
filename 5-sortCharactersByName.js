const data = require('./database');

// Crie uma função que ordene os personagens através do nome

const sortCharactersByName = () => {
  return data.characters.sort((charA, charB) => {
    // if (charA.name > charB.name) {
    //   return 1;
    // }
    // if (charA.name < charB.name) {
    //   return -1;
    // }
    // return 0;
    return charA.name.localeCompare(charB.name);
  });
};

console.log(sortCharactersByName());
