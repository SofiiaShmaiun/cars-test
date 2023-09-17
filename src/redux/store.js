import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, filterReducer } from './slices';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
