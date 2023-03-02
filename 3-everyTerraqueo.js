const data = require('./database');

// a) Verifica se todos os personagens são Terráqueos
// b) Verifica se algum personagem é Terráqueo

const everyTerraqueo = () => {
  const speciesTerraqueo = data.species.find((especie) => especie.name === 'Terráqueo');
  const terraqueoId = speciesTerraqueo.id;

  return data.characters.every((character) => character.id === terraqueoId);
  // return data.characters.some((character) => character.id === terraqueoId);
};

console.log(everyTerraqueo());
