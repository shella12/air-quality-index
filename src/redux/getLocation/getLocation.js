import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getGeoLocation from '../../APIs/geoLocationApi';

const GET_LOCATION = 'POLLUTIONCHECK/getLocation/GET_LOCATION';
const initialState = null;
export const getLocation = createAsyncThunk(GET_LOCATION, async (location) => {
  const response = await getGeoLocation(location);
  return response;
});

const LocationSlice = createSlice({
  name: 'LOCATION',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.fulfilled, (state, action) => (action.payload))
      .addCase(getLocation.rejected, (state, action) => action.error);
  },

});

export default LocationSlice.reducer;
