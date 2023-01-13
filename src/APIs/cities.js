import cities from 'cities.json';

const getCitiesApi = () => {
  const citiesArrN = cities.map((city) => city.name);
  const citiesArr = [...new Set(citiesArrN)];
  citiesArr.sort();
  return citiesArr;
};

export default getCitiesApi;
