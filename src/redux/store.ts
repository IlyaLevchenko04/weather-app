import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weather-slice';
import favoritesSlice from './slices/favorites-slice';

export const store = configureStore({
  reducer: {
    forecast: weatherSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
