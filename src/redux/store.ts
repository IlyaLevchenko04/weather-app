import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weather-slice';

export const store = configureStore({
  reducer: {
    forecast: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
