import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function ClientPolicyPage() {
  const { id } = useParams()
  const [client, setClient] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:9292/clients/${id}`)
      .then(resp => resp.json())
      .then((client) => setClient(client))
  }, [id]);

  if (!client) return <h2>Loading Client Info...</h2>

  console.log(client.policies)

  return (
    <div>
      <h2>{client.first_name} {client.last_name}</h2>
      <Link to={`${client.id}/addpolicy`}>Add Policy</Link>

      <ul>{client.policies.map(policy => (
        <div key={policy.policy_number}>
          <h2>{policy.carrier} #{policy.policy_number}</h2>
          <p>Policy Date: {policy.policy_date}</p>
          <p>Face Amount: ${policy.face_amount.toLocaleString()}</p>
          <p>Product: {policy.product}</p>
          <p>Conversion Expires: {policy.conversion_expiry}</p>
        </div>
      ))}</ul>
    </div>
  )
}