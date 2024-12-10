import { createAsyncThunk } from '@reduxjs/toolkit';
import { Forecast } from '@shared/api/forecast';

export const fetchFiveDayForecast = createAsyncThunk(
  'users/fetchFiveDayForecast',
  async (city: string) => {
    const response = await Forecast.getFiveDayForecast(city);
    return response;
  }
);
