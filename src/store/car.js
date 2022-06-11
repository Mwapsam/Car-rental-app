import { createSlice } from '@reduxjs/toolkit';
import getCars from '../services/car.service';
import { deleteCars } from '../services/car.service';

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
      state.isCarsStored = false;
    },
    [getCars.fulfilled]: (state, { payload }) => {
      state.carsList = payload;
      state.status = 'success';
      state.isCarsStored = true;
    },
    [getCars.rejected]: (state) => {
      state.status = 'failed';
      state.isCarsStored = false;
    },
    // [deleteCars.pending]: (state, payload) => {
    //   state.status = 'pending delete';
    //   state.isCarsStored = false;
    //   console.log(state.status);
    // },
    // [deleteCars.fulfilled]: (state, payload) => {
    //   state.carsList = state.carsList.filter((car) => car.id !== +payload);
    //   state.status = 'success delete';
    //   console.log(state.carsList);
    //   console.log(state.status);
    // },
    // [deleteCars.rejected]: (state, payload) => {
    //   state.status = 'failed delete';
    //   state.isCarsStored = false;
    //   console.log(state.status);
    // },
  },
});

export default carsSlice.reducer;
