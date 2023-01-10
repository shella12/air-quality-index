import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getQuality from '../../APIs/airQualityApi';
import getGeoLocation from '../../APIs/GeoLocationAPI';

const GET_AQI = 'POLLUTIONCHECK/airquality/GET_AQI';
const initialState = {
  aqi: null,
  error: '',
};
export const getAqi = createAsyncThunk(GET_AQI, async (location) => {
  const response = await getGeoLocation(location)
    .then((response) => getQuality(response[0].lat, response[0].lon));
  return response;
});

const AqiSlice = createSlice({
  name: 'AQI',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getAqi.fulfilled, (state, action) => ({
      ...state,
      aqi: action.payload,
    }))
      .addCase(getAqi.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },

});

export const { resetState } = AqiSlice.actions;
export default AqiSlice.reducer;
