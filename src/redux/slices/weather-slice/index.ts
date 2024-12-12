import { createSlice } from '@reduxjs/toolkit';
import { fetchFiveDayForecast } from './thunks/forecast';
import { WeatherResponse } from '@shared/types/forecast';

export interface WeatherState {
  data: WeatherResponse | null;
  isLoading: boolean;
  error: string;
}

const initialState: WeatherState = {
  data: null,
  isLoading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFiveDayForecast.fulfilled, (state, action) => {
        state.isLoading = !state.isLoading;

        state.data = action.payload as WeatherResponse;

        state.error = '';
      })
      .addCase(fetchFiveDayForecast.pending, state => {
        state.isLoading = !state.isLoading;
      })
      .addCase(fetchFiveDayForecast.rejected, (state, action) => {
        state.isLoading = !state.isLoading;

        state.error = action.payload as unknown as string;
      });
  },
});

export const some = weatherSlice.actions;

export default weatherSlice.reducer;
