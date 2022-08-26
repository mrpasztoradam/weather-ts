import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/Detalis';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:cityId" element={<Details />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
