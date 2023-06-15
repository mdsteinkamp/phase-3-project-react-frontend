import React from "react";

export default function Client({ client }) {

  return (
    <>
      <h3>{client.first_name} {client.last_name}</h3>
      <p>Date of Birth: {client.date_of_birth}</p>
      <p>State: {client.state}</p>
      <p>Spouse: {client.spouse_name}</p>
    </>
  )
}