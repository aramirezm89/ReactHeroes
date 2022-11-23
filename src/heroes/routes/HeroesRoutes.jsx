
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { NavBar } from '../../shared/NavBar'
import { DCPage,MarvelPage, SearchPage,HeroPage} from '../pages';
import { AddHero } from '../pages/AddHero';
import { HomePage } from '../pages/HomePage';
import { UpdateHero } from '../pages/UpdateHero';

export const HeroesRoutes = ({ toggleDrawer }) => {
   const { authState } = useContext(AuthContext);
   const { user } = authState;
  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <div className="container-fluid mt-2">
        <Routes>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="dc" element={<DCPage />}></Route>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero/:id" element={<HeroPage />}></Route>

          <Route
            path="hero/add"
            element={user.role === "ADMIN_ROLE" ? <AddHero /> : <HomePage />}
          ></Route>

          <Route
            path="hero/update/:id"
            element={user.role === "ADMIN_ROLE" ? <UpdateHero /> : <HomePage />}
          ></Route>
          <Route path="/" element={<Navigate to={"home"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
