import React, { useState } from "react";

export default function AddClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    dateOfBirth:"",
    state: "",
    spouseName: ""
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  console.log(formData)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    <div>
      <h1>Add Client</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input 
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="spouseName"
          placeholder="Spouse Name"
          value={formData.spouseName}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

    </div>
  )
}

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   fetch(`http://localhost:9292/policies/${id}`)
  //   .then(resp => resp.json())
  //   .then(policy => console.log(policy))
  // }
  