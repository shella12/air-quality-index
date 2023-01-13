import { configureStore } from '@reduxjs/toolkit';
import AqiSlice from './airquality/airquality';
import LocationSlice from './getLocation/getLocation';
import CitiesSlice from './cities/cities';

const store = configureStore({
  reducer: {
    AqiSlice,
    LocationSlice,
    CitiesSlice,
  },
});

export default store;
