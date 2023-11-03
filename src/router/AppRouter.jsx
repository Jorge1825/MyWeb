import { Routes, Route } from "react-router-dom";
import { Login, NotFoundPage, Home } from "../views";
import { PrivateRoutes, PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        {/* Cuando  no se encuentra la ruta renderiza el componente NotFoundPage */}

        <Route
          path="*"
          element={
            <PublicRoutes>
              <NotFoundPage />
            </PublicRoutes>
          }
        />
      </Routes>
    </>
  );
};
