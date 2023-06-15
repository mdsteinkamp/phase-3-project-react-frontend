import React from 'react';
import { Route, Routes } from "react-router-dom"
import '../App.css';
import Clients from './Clients';
import Policies from './Policies';
import NavBar from './NavBar';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/policies" element={<Policies />} />

      </Routes>
      
    </div>
  );
}