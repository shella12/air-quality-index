const api = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const apiId = '129be1eff3bfdd367c8cd6e187c2071a';

const getQuality = async (lat, lon) => {
  const response = await fetch(`${api}lat=${lat}&lon=${lon}&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw (error);
    });
  return response;
};

export default getQuality;
