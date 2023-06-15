import React from 'react';
import { Route, Routes } from "react-router-dom"
import '../App.css';
import ClientsList from './ClientsList';
import PoliciesList from './PoliciesList';
import NavBar from './NavBar';
import Home from './Home';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/policies" element={<PoliciesList />} />
      </Routes>
      
    </div>
  );
}