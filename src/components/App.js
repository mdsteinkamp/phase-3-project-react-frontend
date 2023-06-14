import React from 'react';
import { Route, Routes } from "react-router-dom"
import '../App.css';
import AddClientForm from './AddClientForm';
import AddPolicyForm from './AddPolicyForm';
import NavBar from './NavBar';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/addclient" element={<AddClientForm />} />
        <Route path="/addpolicy" element={<AddPolicyForm />} />

      </Routes>
      
    </div>
  );
}