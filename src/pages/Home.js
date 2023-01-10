import { useDispatch, useSelector } from 'react-redux';
import { getAqi } from '../redux/airquality/airquality';
import Aqi from './Aqi';
import AqiInput from '../components/AqiInput';
import { getLocation } from '../redux/getLocation/getLocation';

const Home = () => {
  const dispatch = useDispatch();
  const aqiData = useSelector((state) => state.AqiSlice.aqi);
  const error = useSelector((state) => state.AqiSlice.error);
  const inputLocation = (location) => {
    dispatch(getAqi(location));
    dispatch(getLocation(location));
  };
  return (
    <div>
      <AqiInput inputLocation={inputLocation} />
      <Aqi
        aqiData={aqiData}
        error={error}
      />
    </div>
  );
};
export default Home;
