import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import CitiesCards from '../components/CitiesCards';

const PaginatedItems = (props) => {
  const { itemsPerPage, inputLocation } = props;
  const cities = useSelector((state) => state.CitiesSlice.cities);
  const [currentCities, setCurrentCities] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentCities(cities.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cities.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cities]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cities.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="cities">
      <CitiesCards cities={currentCities} inputLocation={inputLocation} />
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  inputLocation: PropTypes.func.isRequired,
};

export default PaginatedItems;
