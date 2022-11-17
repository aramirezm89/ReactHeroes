import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";


export const AppRouter = ({ toggleDrawer }) => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
          < LoginPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes toggleDrawer={toggleDrawer} />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
