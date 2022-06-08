import { createSlice } from '@reduxjs/toolkit';
import getCars from '../services/car.service';

// create slice
export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    status: null,
  },
  extraReducers: {
    [getCars.pending]: (state) => {
      state.status = 'pending';
    },
    [getCars.fulfilled]: (state, { payload }) => {
      state.carsList = payload;
      state.status = 'success';
    },
    [getCars.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default carsSlice.reducer;
