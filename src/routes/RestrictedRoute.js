import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./PrivateRoute";
import { routes } from "../utils/constants";

// RestrictedRoute component
const RestrictedRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to={routes.home} replace /> : children;
};

export default RestrictedRoute;
