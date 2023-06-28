import React from "react";
import { Link } from "react-router-dom"
import ClientInfoPage from "./ClientInfoPage";

export default function ClientsList({ clients }) {

  return (
    <>
      <h1>Client List</h1>
      <ul>
        {clients.map(client => (
          <ClientInfoPage key={client.id} client={client} />
        ))}
      </ul>
    </>
  )
}