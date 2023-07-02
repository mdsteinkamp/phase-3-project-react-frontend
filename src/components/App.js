import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import ClientsList from './ClientsList';
import AddClient from './AddClient';
import ClientPolicyPage from './ClientPolicyList';
import AddPolicy from './AddPolicy';
import NavBar from './NavBar';
import Home from './Home';
import InsuranceTotal from './InsuranceTotal';
import '../App.css';

export default function App({}) {
  const [clients, setClients] = useState([])
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }, [])

  function handleAddClient(newClient) {
    setClients([...clients, newClient])
  }

  function handleDeleteClient(deletedClient) {
    const updatedClients = clients.filter(client => client.id !== deletedClient.id)
    setClients(updatedClients)
  }

  function searchClients(search) {
    setSearchInput(search)
  }

  function handleClearSearch() {
    setSearchInput("")
  }

  const shownClients = searchInput !== "" ? clients.filter(client =>
    Object.values(client).join(' ').toLowerCase().includes(searchInput.toLowerCase())) : clients

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsList clients={shownClients} onDeleteClient={handleDeleteClient} onSearch={searchClients} onClearSearch={handleClearSearch}/>} />
        <Route path="/addclient" element={<AddClient onAddClient={handleAddClient}/>} />
        <Route path="/clients/:id" element={<ClientPolicyPage clients={clients} />} />
        <Route path="/clients/:id/:id/addpolicy" element={<AddPolicy />} />
        <Route path="/insurancetotal" element={<InsuranceTotal />} />
      </Routes>
    </div>
  );
}