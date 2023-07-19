import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom"
import ClientsList from './ClientsList';
import AddClient from './AddClient';
import ClientPolicyPage from './ClientPolicyList';
import AddPolicy from './AddPolicy';
import NavBar from './NavBar';
import Home from './Home';
import InsuranceTotal from './InsuranceTotal';
import '../App.css';
import ClientPolicyList from './ClientPolicyList';

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
    setClients([...clients, newClient])
  }

  function handleAddPolicy(newPolicy, id) {
    const updatedClient = clients.find(client => client.id == parseInt(id))
    updatedClient.policies.push(newPolicy)
    const updatedClients = clients.map(client => {
      if (client.id === updatedClient.id) {
        return updatedClient
      } else return client
    })
    setClients(updatedClients)
    navigate(`/clients/${id}`)
  }

  function handleUpdatePolicy(updatedPolicy, id) {
    const updatedClients = [...clients]
    const clientWithUpdatedPolicy = clients.find(client => client.id === parseInt(id))
    const newPolicies = clientWithUpdatedPolicy.policies.map(policy => {
      if (policy.id === updatedPolicy.id) {
        return updatedPolicy
      } else return policy
    })
    clientWithUpdatedPolicy.policies = newPolicies
    updatedClients.map(client => {
      if (client.id === clientWithUpdatedPolicy.id) {
        return clientWithUpdatedPolicy
      } else return client
    })
    setClients(updatedClients)
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
        <Route path="/clients/:id" element={<ClientPolicyList clients={clients} onUpdatePolicy={handleUpdatePolicy}/>} />
        <Route path="/clients/:id/addpolicy" element={<AddPolicy clients={clients} onAddPolicy={handleAddPolicy}/>} />
        <Route path="/insurancetotal" element={<InsuranceTotal />} />
      </Routes>
    </div>
  );
}