const api = [
  {
    id: 1,
    city: 'New York',
    date_reserved: '2020-01-01',
    duration: '1',
    car: {
      id: 1,
      name: 'BMW',
      reserved: false,
      description: 'blue',
      price: '15.0',
      pictures: null,
      user: {
        id: 1,
        name: 'Admin',
        email: 'admin@mail.com',
        password_digest: '$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C',
        role: 'admin',
      },
    },
  },
  {
    id: 2,
    city: 'New York',
    date_reserved: '2020-01-01',
    duration: '1',
    car: {
      id: 2,
      name: 'Jeep',
      reserved: false,
      description: 'black',
      price: '20.0',
      pictures: null,
      user: {
        id: 1,
        name: 'Admin',
        email: 'admin@mail.com',
        password_digest: '$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C',
        role: 'admin',
      },
    },
  },
  {
    id: 3,
    city: 'New York',
    date_reserved: '2020-01-01',
    duration: '1',
    car: {
      id: 3,
      name: 'Toyota',
      reserved: false,
      description: 'blue',
      price: '15.0',
      pictures: null,
      user: {
        id: 1,
        name: 'Admin',
        email: 'admin@mail.com',
        password_digest: '$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C',
        role: 'admin',
      },
    },

  },
];

export default api;
