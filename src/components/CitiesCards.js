import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import map1 from '../assets/map1.jpg';

const CitiesCards = (props) => {
  const { cities, inputLocation } = props;
  return (
    <div className="city-list">
      {cities
            && cities.map((city) => (
              <div key={city} className="card">
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${map1})` }}
                >
                  <img src={map1} alt="cityImg" />
                </div>
                <li><Link to="/" onClick={() => inputLocation(city)}>{city}</Link></li>
              </div>
            ))}
    </div>
  );
};

CitiesCards.defaultProps = {
  cities: null,
};
CitiesCards.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  inputLocation: PropTypes.func.isRequired,
};
export default CitiesCards;
