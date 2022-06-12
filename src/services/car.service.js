import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// create thunk
const getCars = createAsyncThunk(
  'cars/getCars',
  async () => {
    const getCarsData = axios.get('http://localhost:3000/api/v1/cars');
    const res = (await getCarsData).data;
    return res;
  },
);


// delete a car
export const deleteCars = createAsyncThunk(
  'cars/deleteCars',
  async ({id, token}) => {
    axios.delete(`http://localhost:3000/api/v1/cars/${id}`, {headers:{Authorization: token}});
    return id;
  },
);


export default getCars;
