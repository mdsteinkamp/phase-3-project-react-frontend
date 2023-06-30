import React, { useState } from 'react';

export default function ClientPolicyPage({ policy }) {
  const [editPolicy, setEditPolicy] = useState(false)
  const [formData, setFormData] = useState({
    carrier: policy.carrier,
    product: policy.product,
    policy_date: policy.policy_date,
    policy_number: policy.policy_number,
    face_amount: policy.face_amount,
    conversion_expiry: policy.conversion_expiry,
    purpose: policy.purpose,
    rate_class: policy.rate_class,
    active: policy.active,
    client_id: policy.client_id,
  })

  function handleEditButton() {
    setEditPolicy(!editPolicy)
  }

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
    fetch(`http://localhost:9292/policies/${policy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(updatedPolicy => console.log(updatedPolicy))

  }

  return (
    <div>
      <h2>{policy.carrier} #{policy.policy_number}</h2>
      <p>Policy Date: {policy.policy_date}</p>
      <p>Face Amount: ${policy.face_amount.toLocaleString()}</p>
      <p>Product: {policy.product}</p>
      <p>Conversion Expires: {policy.conversion_expiry}</p>
      <p>Active: {policy.active ? "In Force" : "Not In Force"}</p>
      <button onClick={handleEditButton}>Edit Policy</button>
      <div>
        {!editPolicy ? null : 
        <form onSubmit={handleSubmit}>
          <br />
        <input 
          type="text"
          name="carrier"
          placeholder="Carrier"
          value={formData.carrier}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="product"
          placeholder="Product"
          value={formData.product}
          onChange={handleChange}
        />
        <br />
        <input 
          type="date"
          name="policy_date"
          placeholder="Policy Date"
          value={formData.policy_date}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="policy_number"
          placeholder="Policy Number"
          value={formData.policy_number}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="face_amount"
          placeholder="Face Amount"
          value={formData.face_amount}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="conversion_expiry"
          placeholder="Convsersion Expiry"
          value={formData.conversion_expiry}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="purpose"
          placeholder="Purpose of Insurance"
          value={formData.purpose}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="rate_class"
          placeholder="Rate Class"
          value={formData.rate_class}
          onChange={handleChange}
        />
        <br />
        <input 
          type="text"
          name="active"
          placeholder="In Force/Not In Force"
          value={formData.active}
          onChange={handleChange}
        />
        <br />
        <button>Update</button>
      </form>
        }
      </div>
    </div>
  )
}
