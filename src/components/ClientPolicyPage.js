import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ClientPolicyPage({ clients }) {
  const { id } = useParams()
  const [client, setClient] = useState(null)

  // const client = clients.find(client => cliet.id === parseInt(id))

  useEffect(() => {
    fetch(`http://localhost:9292/clients/${id}`)
      .then(resp => resp.json())
      .then((client) => setClient(client))
  }, [id]);

  if (!client) return <h2>Loading Client Info...</h2>


  return (
    <div>
      <h2>{client.first_name} {client.last_name}</h2>
    </div>
  )
}