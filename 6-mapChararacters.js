const data = require('./database');

// Crie uma função que irá mapear os personagens, substituindo a propriedade speciesId contendo o id da espécie pela propriedade species contendo o nome da espécie. Exemplo abaixo:
/*
  {
    "id": 1,
    "name": "SON GOKU",
    "gender": "M",
    "species": "Saiyans",
    "powers": ['Dragon Flash Fist', 'Kamehameha', 'Rapid Kick Rush']
  }
*/

const getSpecieNameById = (specieId) => data.species.find(specie => specie.id === specieId).name;

const mapCharacters = () => {
  return data.characters.map(char => ({
    id: char.id,
    name: char.name,
    gender: char.gender,
    species: getSpecieNameById(char.speciesId),
    powers: char.powers,
  }));
};

console.log(mapCharacters());
