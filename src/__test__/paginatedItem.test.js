import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import PaginatedItems from '../pages/PaginatedItems';

describe('testing PaginatedItems component', () => {
  it('should render the PaginatedItems component', () => {
    const paginatedItems = render(
      <Provider store={store}>
        <BrowserRouter>
          <PaginatedItems />
        </BrowserRouter>
      </Provider>,
    );
    expect(paginatedItems).toMatchSnapshot();
  });
});
