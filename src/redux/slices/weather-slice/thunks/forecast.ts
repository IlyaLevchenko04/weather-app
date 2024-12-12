import { createAsyncThunk } from '@reduxjs/toolkit';
import { Forecast } from '@shared/api/forecast';

export const fetchFiveDayForecast = createAsyncThunk(
  'forecast/fetchFiveDayForecast',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await Forecast.getFiveDayForecast(city);

      if (typeof response === 'string') {
        const err = new Error('You have some problems with city name?');

        throw err;
      }

      return response;
    } catch (err) {
      console.error(err);
      return rejectWithValue('You have some problems with city name?');
    }
  }
);
