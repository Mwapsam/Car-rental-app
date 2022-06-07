import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user';

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        {!user.data && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user.data && (
          <>
            <li>
              <Link to="/private">Private</Link>
            </li>
            <button type="button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
