import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import ClientsList from './ClientsList';
import AddClient from './AddClient';
import ClientPolicyPage from './ClientPolicyPage';
import NavBar from './NavBar';
import Home from './Home';
import '../App.css';

export default function App({}) {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsList clients={clients} />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/clients/:id" element={<ClientPolicyPage clients={clients} />} />
      </Routes>
      
    </div>
  );
}