import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Private from "./pages/Private";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
