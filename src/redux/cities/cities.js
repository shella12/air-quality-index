import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCitiesApi from '../../APIs/cities';

const GET_CITIES = 'air-quality-index/cities/GET_CITIES';
const initialState = {
  cities: [],
  filterCities: [],
};

export const getCities = createAsyncThunk(GET_CITIES, async () => {
  const response = await getCitiesApi();
  return response;
});

const CitiesSlice = createSlice({
  name: 'CITIES',
  initialState,
  reducers: {
    filterCities: (state, action) => {
      const filterStr = (action.payload).charAt(0).toUpperCase() + (action.payload).slice(1);
      console.log(state.filterCities);
      return ({
        ...state,
        filterCities: state.cities.filter((city) => city.startsWith(filterStr)),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => ({
      ...state,
      cities: action.payload,
      filterCities: action.payload,
    }));
  },

});

export const { filterCities } = CitiesSlice.actions;
export default CitiesSlice.reducer;
