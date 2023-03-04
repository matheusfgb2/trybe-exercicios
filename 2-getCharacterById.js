const data = require('./database');

// Crie uma função que busca o personagem de acordo com seu id.

const getCharacterById = (id) => data.characters.find((char) => char.id === id);

console.log(getCharacterById(9));
