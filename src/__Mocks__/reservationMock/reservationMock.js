import { createSlice } from '@reduxjs/toolkit';
import { getReservations, createReservations } from './reservationService';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservationsList: [],
    status: null,
  },
  extraReducers: {
    // get reservations
    [getReservations.pending]: (state) => {
      state.status = 'pending';
      state.isReservationsStored = false;
    },
    [getReservations.fulfilled]: (state, { payload }) => {
      state.reservationsList = payload;
      state.status = 'success';
      state.isReservationsStored = true;
    },
    [getReservations.rejected]: (state) => {
      state.status = 'failed';
      state.isReservationsStored = false;
    },
    // create reservation
    [createReservations.fulfilled]: (state, { payload }) => {
      state.reservationsList = [...state.reservationsList, payload];
      state.status = 'success create action';
    },
  },
});

export default reservationSlice.reducer;
