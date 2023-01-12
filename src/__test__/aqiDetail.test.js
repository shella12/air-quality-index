import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import AqiDetail from '../components/AqiDetail';

describe('testing aqiDetail component', () => {
  it('should render the aqiDetail component', () => {
    const aqiDetail = render(
      <Provider store={store}>
        <BrowserRouter>
          <AqiDetail />
        </BrowserRouter>
      </Provider>,
    );
    expect(aqiDetail).toMatchSnapshot();
  });
});