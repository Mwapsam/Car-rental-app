import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Car from './pages/car/Car';
import Cars from './pages/car/Cars';
import AddCar from './pages/car/AddCar';
import Reservations from './pages/reservation/Reservations';
import AddReservation from './pages/reservation/AddReservation';
import Home from './pages/Home';
import Navigation from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cars">
          <Route index element={<Cars />} />
          <Route index={false} path=":carId" element={<Car />} />
          <Route
            path="new"
            index={false}
            element={(
              <PrivateRoute>
                <AddCar />
              </PrivateRoute>
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
          <Route
            path="new"
            element={(
              <PrivateRoute>
                <AddReservation />
              </PrivateRoute>
              )}
          />
        </Route>
      </Routes>
    </>
  </BrowserRouter>
);

export default App;
