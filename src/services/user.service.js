import axios from 'axios';

const UserService = {
  signup: (formData) => axios.post(`${process.env.REACT_APP_SERVER}signup`, {
    user: formData,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }),
  login: (formData) => axios.post(`${process.env.REACT_APP_SERVER}login`, formData),
  logout: () => {},
};

export default UserService;
