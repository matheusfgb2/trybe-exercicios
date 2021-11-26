const { cities, states, regions } = require('../data/data.js');

/**
 * Dado um arquivo com dados de regiões, estados e cidades, crie uma função
 *  (mapCities)
 * que retorna um objeto no qual as chaves são as siglas das regiões 
 * (N, NE, CW, SE e S) e os valores
 * são arrays compostos por objetos com o nome da cidade e o nome do estado.
 * {
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
}
 */ 

// let citiesWithRegion = { N: [{}]}

const mapCities = () => {
  return cities.reduce((citiesWithRegion, currentCity) => {
    if (!citiesWithRegion[currentCity.region]) {
      citiesWithRegion[currentCity.region] = [];
    }

    const state = states.find((estado) => estado.short === currentCity.state); 

    const result = {
      city: currentCity.name,
      state: state.name,
    }

    citiesWithRegion[currentCity.region].push(result);

    return citiesWithRegion;
  }, {})
}

console.log(mapCities());
