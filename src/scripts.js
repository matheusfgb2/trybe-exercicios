const assert = require('assert');
const { cities, states, regions } = require('../data/data.js');

/**
 * Dado um arquivo com dados de regiões, estados e cidades, construir uma função (mapCities)
 * que retorna um objeto onde as propriedades são as siglas das regiões. Cada região é um array
 * que possuirá objetos com o nome da cidade e o nome do estado.
 * 
 */

const expectedWithoutRegions = {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
};

const mapCities = () => {

    return cities.reduce((citiesWithRegion, currentCity) => {
        if (!citiesWithRegion[currentCity.region]) {
          citiesWithRegion[currentCity.region] = [];
        }
        const state = states.find((state) => state.short === currentCity.state);
        const result = {
          city: currentCity.name,
          state: state.name,
        };
        citiesWithRegion[currentCity.region].push(result);
        return citiesWithRegion;
      }, {});
  }
  
  console.log(mapCities());
    
