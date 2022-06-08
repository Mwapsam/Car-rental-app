import { createAsyncThunk } from '@reduxjs/toolkit';

// create thunk
const getCars = createAsyncThunk(
  'cars/getCars',
  async () => {
    const getCarsData = await fetch('http://localhost:3000/api/v1/cars');
    const res = await getCarsData.json();
    return res;
  },
);

export default getCars;
