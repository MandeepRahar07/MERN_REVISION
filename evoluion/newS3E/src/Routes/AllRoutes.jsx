import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <PrivateRoute path="/product/:id/view" element={<ProductDetailsPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
