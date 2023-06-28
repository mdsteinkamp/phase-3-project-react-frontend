import React, { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from "react-router-dom"
import ClientsList from './ClientsList';
import AddClient from './AddClient';
import ClientPolicyPage from './ClientPolicyPage';
import AddPolicy from './AddPolicy';
import NavBar from './NavBar';
import Home from './Home';
import '../App.css';

export default function App({}) {
  const [clients, setClients] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }, [])

  function handleAddClient(newClient) {
    fetch("http://localhost:9292/clients")
    .then(resp => resp.json())
    .then(clients => {
      setClients(clients)
      navigate("/clients")
    })
  }

  function handleDeleteClient() {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }

  function searchClients(search) {
    setSearchInput(search)
  }

  const shownClients = searchInput !== "" ? clients.filter(client =>
    Object.values(client).join(' ').toLowerCase().includes(searchInput.toLowerCase())) : clients

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsList clients={shownClients} onDeleteClient={handleDeleteClient} onSearch={searchClients} />} />
        <Route path="/addclient" element={<AddClient onAddClient={handleAddClient}/>} />
        <Route path="/clients/:id" element={<ClientPolicyPage clients={clients} />} />
        <Route path="/clients/:id/:id/addpolicy" element={<AddPolicy />} />
      </Routes>
    </div>
  );
}