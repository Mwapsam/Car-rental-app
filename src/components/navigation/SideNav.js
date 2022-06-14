import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../store/user';

const SideNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className="w-2/12 h-screen  py-8 pl-8 border-r-2 border-zinc-200 fixed hidden md:block">
      <nav className="flex flex-col h-full">
        <div className="h-1/6">
          <p className="text-4xl font-black">rentar.</p>
        </div>
        <ul className="flex-1 font-bold text-xl uppercase ">
          <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
            <Link to="/cars">Cars</Link>
          </li>
          {!user.data && (
            <>
              <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
                <Link to="/login">Login</Link>
              </li>
              <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}

          {user.data && (
            <>
              <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
                <Link to="/reservations">Reservations</Link>
              </li>
              <li className="py-4 pl-4 hover:bg-emerald-400 hover:text-white">
                <button type="button" onClick={() => dispatch(logout())}>
                  LOGOUT
                </button>
              </li>

            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
