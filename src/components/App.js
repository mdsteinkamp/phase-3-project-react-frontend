import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import ClientsList from './ClientsList';
import AddClient from './AddClient';
import AddPolicy from './AddPolicy';
import NavBar from './NavBar';
import Home from './Home';
import '../App.css';
import ClientPolicyList from './ClientPolicyList';

export default function App() {
  const [clients, setClients] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }, [])

  function handleAddClient(newClient) {
    setClients([...clients, newClient])
  }

  function handleAddPolicy(newPolicy) {
    const selectedClient = clients.find(client => client.id === newPolicy.client_id)
    const updatedPolices = [...selectedClient.policies, newPolicy]
    const updatedClient = {...selectedClient, policies: updatedPolices}
    const updatedClients = clients.map(client => client.id === updatedClient.id ? updatedClient : client)
    setClients(updatedClients)
    navigate(`/clients/${newPolicy.client_id}/policies`)
  }

  function handleUpdatePolicy(updatedPolicy) {
    const selectedClient = clients.find(client => client.id === updatedPolicy.client_id)
    const newPolicies = selectedClient.policies.map(policy => policy.id === updatedPolicy.id ? updatedPolicy : policy)
    const updatedClient = {...selectedClient, policies: newPolicies}
    const updatedClients = clients.map(client => client.id === updatedPolicy.client_id ? updatedClient : client)
    setClients(updatedClients)
  }

  function handleDeleteClient(deletedClient) {
    const updatedClients = clients.filter(client => client.id !== deletedClient.id)
    setClients(updatedClients)
  }

  function handleDeletePolicy(deletedPolicy) {
    const selectedClient = clients.find(client => client.id === deletedPolicy.client_id)
    const updatedPolicies = selectedClient.policies.filter(policy => policy.id !== deletedPolicy.id)
    const updatedClient = {...selectedClient, policies: updatedPolicies}
    const updatedClients = clients.map(client => client.id === updatedClient.id ? updatedClient : client)
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
        <Route path="/clients/new" element={<AddClient onAddClient={handleAddClient}/>} />
        <Route path="/clients/:id/policies" element={<ClientPolicyList clients={clients} onUpdatePolicy={handleUpdatePolicy} onDeletePolicy={handleDeletePolicy}/>} />
        <Route path="/clients/:id/policies/new" element={<AddPolicy clients={clients} onAddPolicy={handleAddPolicy}/>} />
      </Routes>
    </div>
  );
}