import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAqi } from '../redux/airquality/airquality';
import Aqi from './Aqi';
import AqiInput from '../components/AqiInput';
import { getLocation } from '../redux/getLocation/getLocation';
import { getCities } from '../redux/cities/cities';
import PaginatedItems from './PaginatedItems';

const Home = () => {
  const dispatch = useDispatch();
  const aqiData = useSelector((state) => state.AqiSlice.aqi);
  const error = useSelector((state) => state.AqiSlice.error);
  const inputLocation = (location) => {
    dispatch(getAqi(location));
    dispatch(getLocation(location));
  };
  useEffect(() => {
    dispatch(getCities());
  });
  return (
    <div>
      <AqiInput inputLocation={inputLocation} />
      <Aqi
        aqiData={aqiData}
        error={error}
      />
      <PaginatedItems itemsPerPage={24} inputLocation={inputLocation} />
    </div>
  );
};
export default Home;
