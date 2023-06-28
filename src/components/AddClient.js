import React, { useState } from "react";

export default function AddClient({ onAddClient }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name:"",
    date_of_birth:"",
    state: "",
    spouse_name: ""
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(newClient => onAddClient(newClient))
  }
  
  return (
    <div>
      <h1>Add Client</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <input 
          type="date"
          name="date_of_birth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="spouse_name"
          placeholder="Spouse Name"
          value={formData.spouseName}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

    </div>
  )
}