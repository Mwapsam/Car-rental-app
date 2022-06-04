import LocalStorage from "../helpers/localStorage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = LocalStorage.getToken();
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
