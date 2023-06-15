import React, { useState } from "react";

export default function PoliciesList() {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/clients/${search}`)
    .then(resp => resp.json())
    .then(client => console.log(client))
  }
  
  return (
    <div>
      <h1>Policies List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

    </div>
  )

}