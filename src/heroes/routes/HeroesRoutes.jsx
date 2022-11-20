
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../shared/NavBar'
import { DCPage,MarvelPage, SearchPage,HeroPage} from '../pages';
import { AddHero } from '../pages/AddHero';
import { HomePage } from '../pages/HomePage';

export const HeroesRoutes = ({ toggleDrawer }) => {
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
          <Route path="hero/add" element={<AddHero />}></Route>
          <Route path="hero/update/:id" element={<AddHero />}></Route>
          <Route path="/" element={<Navigate to={"home"} />}></Route>
        </Routes>
      </div>
    </>
  );
};
