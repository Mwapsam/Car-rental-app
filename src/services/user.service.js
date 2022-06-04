import axios from "axios";

const UserService = {
  signup: (formData) => {
    return axios.post(`${process.env.REACT_APP_SERVER}signup`, {
      user: formData,
    });
  },
  login: (formData) => {
    return axios.post(`${process.env.REACT_APP_SERVER}login`, formData);
  },
  logout: () => {},
};

export default UserService;
