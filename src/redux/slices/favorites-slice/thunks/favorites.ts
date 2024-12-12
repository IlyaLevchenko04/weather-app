import { createAsyncThunk } from '@reduxjs/toolkit';
import { Forecast } from '@shared/api/forecast';

export const fetchMultipleCities = createAsyncThunk(
  'favorites/fetchMultipleCities',
  async (favorites: string[], { rejectWithValue }) => {
    try {
      const response = await Forecast.getAllFavoritesShortForecast(favorites);
      if (typeof response === 'string') {
        const err = new Error('You have some problems with city name?');

        throw err;
      }

      return response.list;
    } catch (err) {
      console.error(err);
      return rejectWithValue('You have some problems with city name?');
    }
  }
);

export const fetchOneCityByName = createAsyncThunk(
  'favorites/fetchOneCity',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await Forecast.getWeatherForOneCity(city);

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
