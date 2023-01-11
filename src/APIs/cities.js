import cities from 'cities.json';

const getCities = () => {
  const citiesArr = cities.map((city) => city.name);
  return citiesArr;
};

export default getCities;
