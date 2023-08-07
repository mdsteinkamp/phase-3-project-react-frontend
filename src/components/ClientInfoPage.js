import { Link } from "react-router-dom"

export default function ClientInfoPage({ client, onDeleteClient }) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/clients/${client.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(deletedClient => onDeleteClient(deletedClient))

  }

  return (
    <div>
      <h2>{client.first_name} {client.last_name}</h2>
      <p>Date of Birth: {client.date_of_birth}</p>
      <p>State: {client.state}</p>
      <p>Spouse: {client.spouse_name}</p>
      <Link to={`/clients/${client.id}/policies`}>View Client Policies</Link>
      <br />
      <br />
      <button onClick={handleDeleteClick}>Remove Client</button>
    </div>
  )
}
