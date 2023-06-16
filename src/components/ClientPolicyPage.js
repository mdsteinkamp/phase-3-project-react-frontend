import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ClientPolicyPage({ clients }) {
  const { id } = useParams()
  const [clientWithPolicies, setClientWithPolicies] = useState([])

  const client = clients.find(client => client.id === parseInt(id))

  useEffect(() => {
    fetch(`http://localhost:9292/policies/${client.id}`)
      .then(resp => resp.json())
      .then((client) => setClientWithPolicies(client));
  }, [client]);

  console.log(clientWithPolicies)

  return (
    <>
      <h3>client policy page</h3>
    </>
  )
}