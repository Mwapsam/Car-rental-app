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

   // get Cars
    [getCars.fulfilled]: (state, payload ) => {
      state.carsList = payload;
      state.status = 'success';
    },
  

    // delete cars
    [deleteCars.fulfilled]: (state, payload ) => {
      state.carsList = state.carsList.filter((car) => car.id !== +payload);
      state.status = 'success delete action';
			return state
    }

    // update car
    // [updateCar.fulfilled]: (state, { payload }) => {
    //   state.carList = { ...state.carList, ...payload };
    // },
  },
});

export default carsSlice.reducer;
