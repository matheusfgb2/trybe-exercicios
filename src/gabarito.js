const { cities, states, regions } = require('../data/data.js');
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