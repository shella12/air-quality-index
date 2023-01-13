import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Aqi = (props) => {
  const navigate = useNavigate();
  const { aqiData, error } = props;

  if (error === 'Cannot read properties of undefined (reading \'lat\')') {
    navigate('/PageNotFound', { state: { message: 'Requested Page not Found' } });
  } else if (aqiData !== null && aqiData.coord) {
    navigate('/AqiDetail', { state: { message: 'Requested Page not Found' } });
  }
  return (
    <div className="aqi-container" />
  );
};

Aqi.defaultProps = {
  aqiData: null,
  error: null,
};
Aqi.propTypes = {
  aqiData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired),
  error: PropTypes.string,
};
export default Aqi;
