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

// console.log(mapCities());

// OU

const mapCities2 = () => {
  return regions.reduce((acc, region) => {
    const filterCityByRegion = cities.filter((city) => city.region === region.short);

    const finalObj = filterCityByRegion.map((city) => {
      const findState = states.find((state) => state.short === city.state).name;
      return { city: city.name, state: findState }
    });

    acc[region.short] = finalObj;
    
    return acc;
  }, {})
};

// console.log(mapCities());