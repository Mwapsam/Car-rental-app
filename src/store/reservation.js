import { createSlice } from '@reduxjs/toolkit';
import getReservations, { CreateReservations } from '../services/reservation.service';

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: null,
  },
  extraReducers: {
    [getReservations.fulfilled]: (state, { payload }) => {
      state.reservations = payload;
      state.status = 'success';
    },
    [getReservations.pending]: (state) => {
      state.status = 'loading';
    },
    [getReservations.rejected]: (state) => {
      state.reservations = [];
      state.status = 'failed';
    },
    [CreateReservations.fulfilled]: (state, action) => {
      state.reservations.unshift(action.payload);
    },
  },
});
export default reservationsSlice.reducer;
