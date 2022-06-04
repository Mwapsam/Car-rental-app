import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { login } from '../../store/user';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          value={values.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {user && user.error && <p>{user.error}</p>}
    </div>
  );
};

export default Login;
