import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// create thunk
export const getCars = createAsyncThunk('cars/getCars',
  async () => fetch('http://localhost:3000/api/v1/cars').then((res) => res.json()));

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
    [getCars.fulfilled]: (state, action) => {
      state.carsList = action.payload;
      state.status = 'success';
    },
    [getCars.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default carsSlice.reducer;
