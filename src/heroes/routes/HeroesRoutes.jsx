
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../shared/NavBar'
import { DCPage,MarvelPage, SearchPage,HeroPage} from '../pages';

export const HeroesRoutes = ({ toggleDrawer }) => {
  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <div className="container-fluid mt-2">
        <Routes>
          <Route path="dc" element={<DCPage />}></Route>
          <Route path="marvel" element={<MarvelPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="hero" element={<HeroPage />}></Route>
          <Route path="/" element={<Navigate to={"dc"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
