const data = require('./database');

// Crie uma função que ordene os personagens através do nome

const sortCharactersByName = () => {
 return data.characters.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortCharactersByName());
