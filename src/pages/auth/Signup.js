/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { signup } from '../../store/user';

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState({
    name: '',
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
    dispatch(signup(values));
    toast.success('You have successfully signed up!');
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center top-0 md:sticky border-b-2 border-neutral-2 w-full py-4 mb-8 bg-zinc-50">
        <h4 className="font-black text-lg md:text-2xl uppercase p-0 m-0 ">Create Account</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              value={values.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Name"
              className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-neutral-800 text-xs font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={values.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
              className="appearance-none block w-full bg-gray-200 text-neutral-800 border border-gray-200 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-6" type="submit">Signup</button>
        </form>
        {user && user.errors && <p>{user.errors}</p>}
      </div>
    </div>
  );
};

export default Signup;
