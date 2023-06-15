import React, { useState } from "react";

export default function PoliciesList() {
  const [idSearch, setIdSearch] = useState("")
  const [lastNameSearch, setLastNameSearch] = useState("")
  const [carrierSearch, setCarrierSearch] = useState("")

  function handleIdSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/policies/${idSearch}`)
    .then(resp => resp.json())
    .then(policy => console.log(policy))
  }

  function handleNameSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/clients/${lastNameSearch}`)
    .then(resp => resp.json())
    .then(policy => console.log(policy))
  }

  function handleCarrierSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/clients/${carrierSearch}`)
    .then(resp => resp.json())
    .then(policy => console.log(policy))
  }
  
  
  return (
    <div>
      <h1>Policies List</h1>
      <form onSubmit={handleIdSubmit}>
        <input 
          type="text"
          name="search"
          placeholder="Search by policy id..."
          value={idSearch}
          onChange={e => setIdSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

      <form onSubmit={handleNameSubmit}>
        <input 
          type="text"
          name="search"
          placeholder="Search by last name..."
          value={lastNameSearch}
          onChange={e => setLastNameSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

      {/* not working  */}
      <form onSubmit={handleCarrierSubmit}>
        <input 
          type="text"
          name="search"
          placeholder="Search by carrier..."
          value={carrierSearch}
          onChange={e => setCarrierSearch(e.target.value)}
        />
        <button>Search</button>
      </form>



    </div>
  )

}