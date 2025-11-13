import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLogged = localStorage.getItem("isLogged");

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
