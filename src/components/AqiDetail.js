import { useSelector } from 'react-redux';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import AqiQuality from './AqiQuality';
import AqiComponentTable from './AqiComponentTable';
import { resetState } from '../redux/airquality/airquality';

const AqiDetail = () => {
  const navigate = useNavigate();
  const dispatch = useNavigate();
  const aqiData = useSelector((state) => state.AqiSlice.aqi);
  const location = useSelector((state) => state.LocationSlice);
  const coordinates = `\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lat}°,\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lon}°`;
  const locationName = location[0].name ? location[0].name : 'Not found';
  const locationState = location[0].state;
  const { country } = location[0];
  const { components } = aqiData.list[0];
  const { aqi } = aqiData.list[0].main;
  const onClickHandler = () => {
    dispatch(resetState());
    navigate('/', { state: { message: 'Reset page' } });
  };

  return (
    <div>
      {aqiData ? (
        <div className="aqi-details">
          <button className="back-button" onClick={() => onClickHandler()} type="button">
            <MdOutlineKeyboardBackspace />
           &nbsp;Go Back
          </button>
          <h1 className="location-heading">
            {locationName}
            ,
            {locationState ? (
              <span>
                {' '}
                {locationState}
                ,
              </span>
            ) : ''}
            {' '}
            {country}
          </h1>
          <p className="location-para">
            coords :
            {coordinates}
          </p>
          {locationState ? (
            <p className="location-para">
              state :
              {' '}
              {locationState}
            </p>
          ) : ''}
          <p className="location-para">
            country code :
            {' '}
            {country}
          </p>
          <AqiQuality aqi={aqi} />
          <AqiComponentTable components={components} />
        </div>
      ) : ''}

    </div>
  );
};

export default AqiDetail;
