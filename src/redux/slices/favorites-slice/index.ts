import { createSlice } from '@reduxjs/toolkit';

export interface FavoritesState {
  data: string[];
}

const initialState: FavoritesState = {
  data: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteFavorite: (state, action) => {
      state.data = state.data.filter(item => item === action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
