import reservationSlice from '../../__Mocks__/reservationMock/reservationMock';
import { getReservations, createReservations } from '../../__Mocks__/reservationMock/reservationService';
import api from '../../__Mocks__/reservationMock/ApiMock';

const initialState = {
  reservationsList: api,
  status: null,
};

test('Test get reservations action', async () => {
  const action = getReservations.fulfilled(api);
  const state = reservationSlice(initialState, action);
  expect(state.status).toEqual('success');
});
test('Test create reservation action', () => {
  const newReservation = {
    id: 4,
    city: 'Paris',
    date_reserved: '2020-01-01',
    duration: '1',
    car: {
      id: 1,
      name: 'BMW',
      reserved: true,
      description: 'blue',
      price: '15.0',
      pictures: null,
      user: {
        id: 1,
        name: 'Admin',
        email: 'admin@mail.com',
        password_digest: '$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C',
      },
    },
  };
  const action = createReservations.fulfilled(newReservation);
  const state = reservationSlice(initialState, action);
  expect(state.status).toEqual('success create action');
  expect(state.reservationsList.length).toEqual(4);
});
