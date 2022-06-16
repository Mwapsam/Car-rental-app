/* eslint-disable comma-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import LocalStorage from '../helpers/localStorage';

const jwtToken = LocalStorage.getUser();

// create thunk
export const getCars = createAsyncThunk('cars/getCars', async () => {
  const getCarsData = axios.get(`${process.env.REACT_APP_SERVER}/api/v1/cars`);
  const res = (await getCarsData).data;
  return res;
});

// delete a car
export const deleteCars = createAsyncThunk(
  'cars/deleteCars',
  async ({ id, token }) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/api/v1/cars/${id}`, {
      headers: { Authorization: token },
    });
    return id;
  }
);

export const createCar = createAsyncThunk(
  'cars/createCar',
  async (car) => {
    const createCarData = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/cars`, car, {
      headers: {
        Authorization: `${jwtToken.token}`,
      },
    });
    const res = await createCarData.data;
    return res;
  },
);

export const updateCar = createAsyncThunk(
  'cars/updateCars',
  async ({ id, token, status }) => {
    const car = { reserved: !status };
    const response = await axios.put(`${process.env.REACT_APP_SERVER}/api/v1/cars/${id}`, car, {
      headers: { Authorization: token },
    });
    const res = await response.data;
    return res;
  }
);
