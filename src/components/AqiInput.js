import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PropTypes } from 'prop-types';
import { usePlacesWidget } from 'react-google-autocomplete';
import { useDispatch } from 'react-redux';
import { filterCities } from '../redux/cities/cities';

const InputLocation = (props) => {
  const { inputLocation } = props;
  const dispatch = useDispatch();
  const [location, setlocation] = useState('');
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyDYYRY4MTwwz70HfxEEuAVOThkMtnfGBbQ',
    options: {
      types: ['(cities)'],
    },
  });
  const onClickHandler = (event) => {
    event.preventDefault();
    if (location.trim()) {
      inputLocation(location);
      setlocation('');
    } else {
      alert('Please enter input');
    }
  };
  const onChangeHandler = (event) => {
    setlocation(event.target.value);
    dispatch(filterCities(location));
  };
  return (
    <div>
      <form className="form-container">
        <input
          className="input-text"
          ref={ref}
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => onChangeHandler(e)}
          onSelect={(e) => onChangeHandler(e)}
        />
        <button className="input-submit" type="submit" onClick={(e) => onClickHandler(e)}>
          <FiSearch style={{ color: '#0290ff', fontSize: '1.6rem' }} />
        </button>
      </form>
    </div>
  );
};

InputLocation.propTypes = {
  inputLocation: PropTypes.func.isRequired,
};
export default InputLocation;
