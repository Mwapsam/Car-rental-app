import { createSlice } from '@reduxjs/toolkit';
import { getCars, updateCar, deleteCars, createCar } from "./carServise"

// create slice
export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    status: null,
  },
  extraReducers: {

    // get cars
    // [getCars.pending]: (state) => {
    //   state.status = 'pending';
    //   state.isCarsStored = false;
    // },
    [getCars.fulfilled]: (state, payload ) => {
      return {...state, carsList: payload, status: true}
    },
    // [getCars.rejected]: (state) => {
    //   state.status = 'failed';
    //   state.isCarsStored = false;
    // },

    // // delete cars
    // [deleteCars.pending]: (state) => {
    //   state.status = 'pending delete action';
    // },
    // [deleteCars.fulfilled]: (state, { payload }) => {
    //   state.carsList = state.carsList.filter((car) => car.id !== +payload);
    //   state.status = 'success delete action';
    // },
    // [deleteCars.rejected]: (state) => {
    //   state.status = 'failed delete action';
    // },

    // [createCar.fulfilled]: (state, action) => {
    //   state.carsList = [...state.carsList, action.payload];
    // },

    // update car
    // [updateCar.fulfilled]: (state, { payload }) => {
    //   state.carList = { ...state.carList, ...payload };
    // },
  },
});

export default carsSlice.reducer;
