import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import Login from "../views/login";
import Signup from "../views/signup";
import { routes } from "../utils/constants";
import PostDetail from "../views/post-detail";
import Contact from "../views/contact";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute
import RestrictedRoute from "./RestrictedRoute"; // Import RestrictedRoute

function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route index element={<Home />} />

      {/* Private Route for authenticated users */}
      <Route
        path={routes.post(":id")}
        element={
          <PrivateRoute>
            <PostDetail />
          </PrivateRoute>
        }
      />
      <Route
        path={routes.contact}
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />

      {/* Restricted Routes for non-authenticated users */}
      <Route
        path={routes.login}
        element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        }
      />
      <Route
        path={routes.signup}
        element={
          <RestrictedRoute>
            <Signup />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
