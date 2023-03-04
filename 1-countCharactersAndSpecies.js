const data = require('./database');

// Crie uma função que mostre a quantidade de personagens

const countCharacters = () => data.characters.length;

console.log(countCharacters());

// Crie uma função que mostre a quantidade de espécies

const countSpecies = () => data.species.length;

console.log(countSpecies());
