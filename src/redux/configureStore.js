import { configureStore } from '@reduxjs/toolkit';
import AqiSlice from './airquality/airquality';
import LocationSlice from './getLocation/getLocation';

const store = configureStore({
  reducer: {
    AqiSlice,
    LocationSlice,
  },
});

export default store;
