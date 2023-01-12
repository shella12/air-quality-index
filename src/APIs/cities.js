import cities from 'cities.json';

const getCities = (filter = null) => {
  const citiesArrN = cities.map((city) => city.name);
  let citiesArr = [...new Set(citiesArrN)];
  citiesArr.sort();
  if (filter && filter !== null) {
    const filter2 = filter.charAt(0).toUpperCase() + filter.slice(1);
    citiesArr = citiesArr.filter((city) => city.startsWith(filter2));
  }
  return citiesArr;
};

export default getCities;
