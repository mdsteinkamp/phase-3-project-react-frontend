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
    }, []);
    
    console.log(clientWithPolicies.policies)
  

  return (
    <>
      <h3>Client Policy List</h3>
      <h3>{client.first_name} {client.last_name}</h3>
      <p>Carrier: {clientWithPolicies.carrier}</p>
      <p>Policy Number: {clientWithPolicies.policy_number}</p>
      <p>Face Amount: {clientWithPolicies.face_amount}</p>
      <p>Policy Date: {clientWithPolicies.policy_date}</p>
    </>
  )
}