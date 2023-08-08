import React from "react"
import { useParams, Link } from "react-router-dom"
import ClientPolicyPage from "./ClientPolicyPage"

export default function ClientPolicyList({ clients, onUpdatePolicy, onDeletePolicy }) {
  const { id } = useParams()

  function handleUpdatePolicy(updatedPolicy) {
    onUpdatePolicy(updatedPolicy, id)
  }

  function handleDeletePolicy(deletedPolicy) {
    onDeletePolicy(deletedPolicy)
  }

  const clientFromFind = clients.find(client => client.id === parseInt(id))

  if (!clientFromFind) return <h2>Loading Client Info...</h2>
  
  return (
    <div>
      <h2>{clientFromFind.first_name} {clientFromFind.last_name}</h2>
      <Link to={`/clients/${clientFromFind.id}/policies/new`}>Add Policy</Link>

      <ul>{clientFromFind.policies.map(policy => (
          <ClientPolicyPage key={policy.policy_number} policy={policy} onUpdatePolicy={handleUpdatePolicy} onDeletePolicy={handleDeletePolicy} />
      ))}</ul>

      <h2>Total Insurance: {clientFromFind.policies.map(p => p.face_amount).reduce((a, c) => a + c, 0)}</h2>
    </div>
  )
}
