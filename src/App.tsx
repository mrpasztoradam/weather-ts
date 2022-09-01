import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/Detalis';
import List from './pages/List';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="search" element={<Search />} />
        <Route path="details/:id" element={<Details />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
