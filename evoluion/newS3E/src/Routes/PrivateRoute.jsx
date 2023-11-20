import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { authState } = useAuth();

  return (
    <Route
      {...rest}
      element={authState.isAuth ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
