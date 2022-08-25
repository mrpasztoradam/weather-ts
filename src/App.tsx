import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/Detalis';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
