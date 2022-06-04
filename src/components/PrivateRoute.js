/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import LocalStorage from '../helpers/localStorage';

const PrivateRoute = ({ children }) => {
  const token = LocalStorage.getUser();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
