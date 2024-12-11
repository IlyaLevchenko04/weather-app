import { createAsyncThunk } from '@reduxjs/toolkit';
import { Forecast } from '@shared/api/forecast';

export const fetchMultipleCities = createAsyncThunk(
  'users/fetchMultipleCities',
  async (favorites: string[]) => {
    const response = await Forecast.getAllFavoritesShortForecast(favorites);

    return response.list;
  }
);
