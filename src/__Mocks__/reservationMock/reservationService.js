import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './ApiMock';

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async () => api,
);

export const createReservations = createAsyncThunk(
  'reservations/createReservations',
  async () => {
    const createReservation = {
      id: 4,
      name: 'Renault',
      reserved: false,
      description: 'blue',
      price: '15.0',
      pictures: null,
      user: {
        id: 1,
        name: 'Admin',
        email: 'admin@mail.com',
        password_digest: '$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C',
      },
    };
    return createReservation;
  },
);
