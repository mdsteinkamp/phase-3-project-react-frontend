import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ClientPolicyPage({ clients }) {
  const { id } = useParams()
  const [clientWithPolicies, setClientWithPolicies] = useState([])


  const client = clients.find(client => client.id === parseInt(id))

  useEffect(() => {
    fetch(`http://localhost:9292/clients/${client.id}`)
      .then(resp => resp.json())
      .then((client) => setClientWithPolicies(client))
  }, [client.id]);


  return (
    <div>
      {clientWithPolicies.policies !== [] ? (
        <h1>No Policies!</h1>
      ) : (
        <h1>Client Policies List</h1>
      )}
    </div>
  )
}