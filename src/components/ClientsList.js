import React, { useEffect, useState } from "react";
import Client from './Client'

export default function ClientsList() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then(resp => resp.json())
      .then(clients => setClients(clients))
  }, [])

  return (
    <>
      <h1>Client List</h1>
      <ul>
        {clients.map(client => (
          <Client key={client.id} client={client} />
        ))}
      </ul>
    </>
  )
}