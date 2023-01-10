import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <Link className="page-not-found-link" to="/">
      <MdOutlineKeyboardBackspace />
&nbsp;Go Back
    </Link>
    <h2 className="page-not-found-heading">Error 404: Page Not Found</h2>
    <p className="page-not-found-heading">Requested page is not available</p>
  </div>
);

export default PageNotFound;
