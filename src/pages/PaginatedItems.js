import cities from 'cities.json';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PropTypes } from 'prop-types';
import CitiesCards from '../components/CitiesCards';

const PaginatedItems = (props) => {
  const citiesArrN = cities.map((city) => city.name);
  const citiesArr = [...new Set(citiesArrN)];
  citiesArr.sort();
  const { itemsPerPage, inputLocation } = props;
  const [currentCities, setCurrentCities] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentCities(citiesArr.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(citiesArr.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % citiesArr.length;
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
        activeClassName="active"
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
