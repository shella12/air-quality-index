import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { PropTypes } from 'prop-types';
import { usePlacesWidget } from 'react-google-autocomplete';

const InputLocation = (props) => {
  const { inputLocation } = props;
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
  return (
    <form className="form-container">
      <input
        className="input-text"
        ref={ref}
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setlocation(e.target.value)}
        onSelect={(e) => setlocation(e.target.value)}
      />
      <button className="input-submit" type="submit" onClick={(e) => onClickHandler(e)}>
        <FiSearch style={{ color: '#0290ff', fontSize: '1.6rem' }} />
      </button>
    </form>
  );
};

InputLocation.propTypes = {
  inputLocation: PropTypes.func.isRequired,
};
export default InputLocation;
