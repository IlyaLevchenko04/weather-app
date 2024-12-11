import { createSlice } from '@reduxjs/toolkit';
import { fetchMultipleCities } from './thunks/favorites';
import { WeatherData } from '@shared/types/forecast';

export interface FavoritesState {
  favorites: string[];
  data: WeatherData[];
  isLoading: boolean;
  error: string;
}

const initialState: FavoritesState = {
  data: [],
  favorites: [],
  isLoading: false,
  error: '',
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.includes(action.payload)) return;

      state.favorites = [...state.favorites, action.payload];
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item === action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchMultipleCities.fulfilled, (state, action) => {
        state.data = [...action.payload];

        state.isLoading = !state.isLoading;
      })
      .addCase(fetchMultipleCities.pending, state => {
        state.isLoading = !state.isLoading;
      })
      .addCase(fetchMultipleCities.rejected, (state, action) => {
        state.error = action.payload as string;

        state.isLoading = !state.isLoading;
      }),
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
