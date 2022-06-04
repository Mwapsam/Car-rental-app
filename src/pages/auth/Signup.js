import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../store/user";

import React, { useState } from "react";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
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
    dispatch(signup(values));
  };

  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={values.name}
          onChange={handleInputChange}
          name="name"
          placeholder="Full name"
        />
        <input
          type={"text"}
          value={values.email}
          onChange={handleInputChange}
          name="email"
          placeholder="Email"
        />
        <input
          type={"password"}
          value={values.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
        />
        <button type="submit">Signup</button>
      </form>
      {user && user.errors && <p>{user.errors}</p>}
    </div>
  );
};

export default Signup;
