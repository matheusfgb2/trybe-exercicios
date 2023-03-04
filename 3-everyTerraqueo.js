const data = require('./database');

// Função para retornar a ID da espécie pelo nome
const findSpecieId = (specieName) => {
  const isASpecie = data.species.some(specie => specie.name === specieName);
  return isASpecie ? data.species.find(specie => specie.name === specieName).id : Error('Espécie Inválida!');
}
// a) Verifica se todos os personagens são Terráqueos
const everyTerraqueo = () => data.characters.every(char => char.speciesId === findSpecieId('Terráqueo'));
// b) Verifica se algum personagem é Terráqueo
const someTerraqueo = () => data.characters.some(char => char.speciesId === findSpecieId('Terráqueo'));
console.log(everyTerraqueo());
console.log(someTerraqueo());