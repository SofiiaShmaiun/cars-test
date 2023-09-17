import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {},
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },
});

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      state.items = action.payload;
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const carsReducer = carsSlice.reducer;
