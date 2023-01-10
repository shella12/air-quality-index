import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../redux/airquality/airquality';
import AqiQuality from '../components/AqiQuality';
import AqiComponentTable from '../components/AqiComponentTable';

const AqiDetail = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { aqiData, location, error } = props;
  let coordinates = '';
  let locationName = '';
  let locationState = '';
  let country = '';
  let components = '';
  let aqi = '';

  if (error === 'Cannot read properties of undefined (reading \'lat\')') {
    dispatch(resetState());
    navigate('/PageNotFound', { state: { message: 'Requested Page not Found' } });
  }

  if (aqiData !== null && location !== null && aqiData.coord) {
    coordinates = `\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lat}°,\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lon}°`;
    locationName = location[0].name;
    locationState = location[0].state;
    country = location[0].country;
    components = aqiData.list[0].components;
    aqi = aqiData.list[0].main.aqi;
  }
  return (
    <div className="aqi-container">
      {aqiData && aqiData !== 'Cannot read properties of undefined (reading \'lat\')' ? (
        <div className="aqi-details">
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
AqiDetail.defaultProps = {
  aqiData: null,
  location: null,
  error: null,
};
AqiDetail.propTypes = {
  aqiData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired),
  location: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
  ]),
  error: PropTypes.string,
};
export default AqiDetail;
