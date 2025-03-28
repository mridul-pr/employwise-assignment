import { Navigate } from "react-router-dom";

import React from "react";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token"); // Check at render time
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
