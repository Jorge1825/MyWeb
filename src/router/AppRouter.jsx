import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Login_Register,
  NotFoundPage,
  Home,
  Projects,
  MainPrivate,
  CreateProject,
} from "../views";
import { PrivateRoutes } from ".";
import { useAuthStore } from "../store/auth/auth";

export const AppRouter = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_Register />} />

        {/* Rutas privadas */}
        <Route
          path="/dasboard/*"
          element={
            <PrivateRoutes isAuthenticated={true}>
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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
