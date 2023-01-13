import { useEffect } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetState } from '../redux/airquality/airquality';

const PageNotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  });
  return (
    <div className="page-not-found">
      <Link className="page-not-found-link" to="/">
        <MdOutlineKeyboardBackspace />
&nbsp;Go Back
      </Link>
      <h2 className="page-not-found-heading">Error 404: Page Not Found</h2>
      <p className="page-not-found-heading">Requested page is not available</p>
    </div>
  );
};

export default PageNotFound;
