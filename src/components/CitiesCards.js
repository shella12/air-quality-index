import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CitiesCards = (props) => {
  const { cities, inputLocation } = props;
  return (
    <div className="city-list">
      {cities
            && cities.map((city) => (
              <div key={city}>
                <li><Link to="/" onClick={() => inputLocation(city)}>{city}</Link></li>
              </div>
            ))}
    </div>
  );
};

CitiesCards.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputLocation: PropTypes.func.isRequired,
};
export default CitiesCards;