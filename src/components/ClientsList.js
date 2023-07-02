import React, { useState } from "react";
import { Link } from "react-router-dom"
import ClientInfoPage from "./ClientInfoPage";

export default function ClientsList({ clients, onDeleteClient, onSearch, onClearSearch }) {
  const [search, setSearch] = useState("")

  function handleDeleteClient(deletedClient) {
    onDeleteClient(deletedClient)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
    onSearch(search)
  }

  function handleClearSearch() {
    onClearSearch()
  }

  return (
    <>
      <h1>Client List</h1>
      <form>
      <input
        type="text"
        id="search"
        placeholder="Client Search"
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <br />
      <button onSubmit={handleClearSearch}>Clear Search</button>
    </form>
      <ul>
        {clients.map(client => (
          <ClientInfoPage key={client.id} client={client} onDeleteClient={handleDeleteClient}/>
        ))}
      </ul>
    </>
  )
}