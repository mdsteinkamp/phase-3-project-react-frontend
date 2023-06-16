import React from "react";
import { Link } from "react-router-dom"

export default function ClientsList({ clients }) {

  return (
    <>
      <h1>Client List</h1>
      <ul>
        {clients.map(client => (
          <div>
            <h3>{client.first_name} {client.last_name}</h3>
            <p>Date of Birth: {client.date_of_birth}</p>
            <p>State: {client.state}</p>
            <p>Spouse: {client.spouse_name}</p>
            <Link to={`${client.id}`}>View Client Policies</Link>
            </div>
        ))}
      </ul>
    </>
  )
}