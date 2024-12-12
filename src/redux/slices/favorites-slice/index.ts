import { createSlice } from '@reduxjs/toolkit';
import { fetchMultipleCities, fetchOneCityByName } from './thunks/favorites';
import { WeatherData } from '@shared/types/forecast';

export interface FavoritesState {
  favorites: string[];
  data: WeatherData[];
  isLoading: boolean;
  error: string;
}

const initialState: FavoritesState = {
  data: [],
  favorites:
    JSON.parse(window.localStorage.getItem('favorites') as string) || [],
  isLoading: false,
  error: '',
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (state.favorites.includes(action.payload)) return;
      const newFavorites = [...state.favorites, action.payload];

      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));

      state.favorites = newFavorites;
    },
    deleteFavorite: (state, action) => {
      const newFavorites = state.favorites.filter(
        item => item.toString() !== action.payload.toString()
      );

      window.localStorage.setItem('favorites', JSON.stringify(newFavorites));

      state.data = state.data.filter(
        item => item.id.toString() !== action.payload.toString()
      );

      state.favorites = newFavorites;

      return state;
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
      })
      .addCase(fetchOneCityByName.fulfilled, (state, action) => {
        state.data = state.data.map(item => {
          if (item.id === action.payload.id) return action.payload;

          return item;
        });

        state.isLoading = !state.isLoading;
      })
      .addCase(fetchOneCityByName.pending, state => {
        state.isLoading = !state.isLoading;
      })
      .addCase(fetchOneCityByName.rejected, (state, action) => {
        state.error = action.payload as string;

        state.isLoading = !state.isLoading;
      }),
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
