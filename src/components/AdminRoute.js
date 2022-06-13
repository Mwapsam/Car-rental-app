/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import LocalStorage from '../helpers/localStorage';

const AdminRoute = ({ children }) => {
  const token = LocalStorage.getUser();
  return token && token.role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;
