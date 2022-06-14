import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { updateMenuState } from '../../store/menu';
import { logout } from '../../store/user';

const MobileNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const menu = useSelector((state) => state.menu.active);

  const handleToggle = (e, link) => {
    e.preventDefault();
    dispatch(updateMenuState());
    navigate(link);
  };
  return (
    <nav className="md:hidden fixed bg-white w-full">
      <div className="flex items-center gap-2 sticky cursor-pointer z-20 text-2xl font-bold px-8 py-4">
        <button type="button" onClick={handleToggle} className="pt-1 font-bold">
          {menu ? <HiX /> : <HiMenuAlt1 />}
        </button>
        {!menu && <p>rentar.</p>}
      </div>
      <ul
        className={`overflow-y-scroll list-none fixed top-0 bg-emerald-500 left-0 bottom-0 h-screen  overflow-hidden z-10 flex flex-col gap-8 font-bold text-2xl  ${
          menu ? 'w-full px-9 pt-24' : 'w-0'
        }`}
      >
        <li className="">
          <Link to="/" className="hover:border-b-4 border-zinc-900" onClick={(e) => handleToggle(e, '/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cars" onClick={(e) => handleToggle(e, '/cars')}>Cars</Link>
        </li>
        {!user.data && (
          <>
            <li>
              <Link to="/login" onClick={(e) => handleToggle(e, '/login')}>Login</Link>
            </li>
            <li>
              <Link to="/signup" onClick={(e) => handleToggle(e, '/signup')}>Signup</Link>
            </li>
          </>
        )}

        {user.data && (
          <>
            <li>
              <Link to="/reservations" onClick={(e) => handleToggle(e, '/reservations')}>Reservations</Link>
            </li>
            <li className="hover:border-b-4 border-zinc-900">
              <button type="button" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </li>

          </>
        )}
      </ul>
    </nav>
  );
};

export default MobileNav;
