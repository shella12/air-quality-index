import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import PageNotFound from '../pages/PageNotFound';

describe('testing PageNotFound component', () => {
  it('should render the PageNotFound component', () => {
    const pageNotFound = render(
      <Provider store={store}>
        <BrowserRouter>
          <PageNotFound />
        </BrowserRouter>
      </Provider>,
    );
    expect(pageNotFound).toMatchSnapshot();
  });
});