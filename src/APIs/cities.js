import cities from 'cities.json';

const getCitiesApi = () => {
  const citiesArrN = cities.map((city) => city.name);
  const citiesArr = [...new Set(citiesArrN)];
  citiesArr.sort();
  // if (filter && filter !== null) {
  //   const filter2 = filter.charAt(0).toUpperCase() + filter.slice(1);
  //   citiesArr = citiesArr.filter((city) => city.startsWith(filter2));
  // }
  return citiesArr;
};

export default getCitiesApi;
