import { createSlice } from '@reduxjs/toolkit';
import {
  getCars, updateCar, deleteCars, createCar,
} from './carServise';

// create slice
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    status: null,
  },
  extraReducers: {

    // get Cars
    [getCars.fulfilled]: (state, payload) => {
      state.carsList = payload;
      state.status = 'success';
    },

    // delete cars
    [deleteCars.fulfilled]: (state, action) => {
      state.carsList = state.carsList.filter((car) => car.id !== +action.payload);
      state.status = 'success delete action';
    },

    // update car
    [updateCar.fulfilled]: (state, action) => {
      state.carList = [...state.carsList, action.payload];
      state.status = 'success update action';
    },

    // create Car
    [createCar.fulfilled]: (state, action) => {
      state.carsList = [...state.carsList, action.payload];
      state.status = 'success create action';
    },
  },
});

export default carsSlice.reducer;
