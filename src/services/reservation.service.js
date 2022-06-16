import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import LocalStorage from '../helpers/localStorage';

const jwtToken = LocalStorage.getUser();

const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async () => {
    const getReservationsData = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/reservations`, {
      headers: {
        Authorization: `Bearer ${jwtToken.token}`,
      },
    });
    const res = await getReservationsData.data;
    return res;
  },
);

export const CreateReservations = createAsyncThunk(
  'reservations/createReservations',
  async (reserve) => {
    const createReservationsData = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/reservations`, reserve, {
      headers: {
        Authorization: `Bearer ${jwtToken.token}`,
      },
    });
    const res = await createReservationsData.data;
    return res;
  },
);

export default getReservations;
