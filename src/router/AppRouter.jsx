import { Routes, Route } from "react-router-dom";
import { Login, NotFoundPage, Home, Projects, MainPrivate,CreateProject } from "../views";
import { PrivateRoutes, PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/dasboard/*"
          element={
            <PrivateRoutes>
              <MainPrivate>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Home />} />
                  <Route path="/settings" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/new" element={<CreateProject />} />
                  <Route path="/*" element={<NotFoundPage />} />
                </Routes>
              </MainPrivate>
            </PrivateRoutes>
          }
        />


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
