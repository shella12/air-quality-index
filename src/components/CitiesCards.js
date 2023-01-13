import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import cityImges from '../assets/cityImage';

const CitiesCards = (props) => {
  const { cities, inputLocation } = props;

  return (
    <div className="city-list">
      {cities
            && cities.map((city) => (
              <div key={city} className="card">
                <h1 className="heading1">{city}</h1>
                <Link to="/" onClick={() => inputLocation(city)}><BsArrowRightCircle style={{ color: '#b3e1ef', fontSize: '1.5rem' }} /></Link>
                <div
                  className="card-img"
                  style={{ backgroundImage: `url(${cityImges[(Math.floor(Math.random() * 10) + 1)]})` }}
                >
                  <img src={cityImges[(Math.floor(Math.random() * 10) + 1)]} alt="cityImg" />
                </div>
                <h1 className="heading2">{city}</h1>
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
