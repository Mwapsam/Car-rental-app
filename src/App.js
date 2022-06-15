import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Car from './pages/car/Car';
import CarsList from './pages/car/CarsList';
import AddCar from './pages/car/AddCar';
import Reservations from './pages/reservation/Reservations';
import DeleteCars from './pages/car/DeleteCars';
import SideNav from './components/navigation/SideNav';
import MobileNav from './components/navigation/MobileNav';
import AdminRoute from './components/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <BrowserRouter>
    <div className="flex">
      <SideNav />
      <div className="flex-1 md:ml-60">
        <MobileNav />
        <div className="py-6 px-8 mt-10 md:mt-0">
          <Routes>
            <Route path="/" element={<CarsList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cars">
              <Route index element={<CarsList />} />
              <Route index={false} path=":carId" element={<Car />} />
              <Route
                path="new"
                index={false}
                element={(
                  <AdminRoute>
                    <AddCar />
                  </AdminRoute>
                )}
              />
              <Route
                path="deleteCars"
                index={false}
                element={(
                  <AdminRoute>
                    <DeleteCars />
                  </AdminRoute>
                )}
              />
            </Route>

            <Route path="/reservations">
              <Route
                index
                element={(
                  <PrivateRoute>
                    <Reservations />
                  </PrivateRoute>
                )}
              />

            </Route>
          </Routes>
        </div>

      </div>
    </div>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
