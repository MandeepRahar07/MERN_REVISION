// ReqAuth.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ReqAuth = ({ element, path }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  return isAuth ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ReqAuth;
