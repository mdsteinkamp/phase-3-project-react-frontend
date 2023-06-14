import React from 'react';
import { Route, Routes } from "react-router-dom"
import '../App.css';
import AddClientForm from './AddClientForm';
import AddPolicyForm from './AddPolicyForm';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Welcome to the app!</h4>
      </header>
      <Routes>
        <Route path="/addclient" element={<AddClientForm />} />
        <Route path="/addpolicy" element={<AddPolicyForm />} />

      </Routes>
      
    </div>
  );
}