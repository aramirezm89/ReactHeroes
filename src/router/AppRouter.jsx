import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes"


export const AppRouter = ({ toggleDrawer }) => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HeroesRoutes toggleDrawer={toggleDrawer} />} />
      </Routes>
    </>
  );
};
