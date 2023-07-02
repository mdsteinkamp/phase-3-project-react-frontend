import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import ClientPolicyPage from "./ClientPolicyPage"

export default function ClientPolicyList() {
  const { id } = useParams()
  const [client, setClient] = useState(null)
  const [clientPolicies, setClientPolicies] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:9292/clients/${id}`)
      .then(resp => resp.json())
      .then((client) => {
        setClient(client)
        setClientPolicies(client.policies)
      })
  }, [id])

  function handleUpdatePolicy(updatedPolicy) {
    const updatedPolicies = clientPolicies.map(policy => {
      if (policy.id === updatedPolicy.id) {
        return updatedPolicy
      } else return policy
    })
    setClientPolicies(updatedPolicies)
  }



  if (!client) return <h2>Loading Client Info...</h2>
  
  return (
    <div>
      <h2>{client.first_name} {client.last_name}</h2>
      <Link to={`${client.id}/addpolicy`}>Add Policy</Link>

      <ul>{client.policies.map(policy => (
          <ClientPolicyPage key={policy.policy_number} policy={policy} onUpdatePolicy={handleUpdatePolicy} />
      ))}</ul>

      <h2>Total Insurance: {clientPolicies.map(p => p.face_amount).reduce((a, c) => a + c, 0)}</h2>
    </div>
  )
}