import React from 'react';
import './Sook.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { HOME_PATH, ROOT_PATH } from './constants';
import Home from './views/home';

export default function Sook() {
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<MainLayout />} />
      <Route path={HOME_PATH} element={<Home />} />
    </Routes>
  );
}
