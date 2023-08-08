import React, { useState } from 'react';

export default function ClientPolicyPage({ policy, onUpdatePolicy, onDeletePolicy }) {
  const [editPolicy, setEditPolicy] = useState(false)
  const [currentPolicy, setCurrentPolicy] = useState(policy)
  const [formData, setFormData] = useState({
    carrier: currentPolicy.carrier,
    product: currentPolicy.product,
    policy_date: currentPolicy.policy_date,
    policy_number: currentPolicy.policy_number,
    face_amount: currentPolicy.face_amount,
    conversion_expiry: currentPolicy.conversion_expiry,
    purpose: currentPolicy.purpose,
    rate_class: currentPolicy.rate_class,
    status: currentPolicy.status,
    client_id: currentPolicy.client_id,
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

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/policies/${currentPolicy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(updatedPolicy => {
        setCurrentPolicy(updatedPolicy)
        onUpdatePolicy(updatedPolicy)
      })
  }

  function handleDeletePolicy() {
    fetch(`http://localhost:9292/policies/${currentPolicy.id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(deletedPolicy => onDeletePolicy(deletedPolicy))
  }

  return (
    <div className="policyCard">
      <h2>{currentPolicy.carrier} #{currentPolicy.policy_number}</h2>
      <p>Policy Date: {currentPolicy.policy_date}</p>
      <p>Face Amount: ${currentPolicy.face_amount.toLocaleString()}</p>
      <p>Product: {currentPolicy.product}</p>
      <p>Conversion Expires: {currentPolicy.conversion_expiry}</p>
      <p>Status: {currentPolicy.status}</p>
      <button onClick={handleDeletePolicy}>Delete Policy</button>
      <br />
      <br />
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
        <label>Status: </label>
        <select name="status" onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Lapsed">Lapsed</option>
        </select>
        <br />
        <button>Update</button>
      </form>
        }
      </div>
    </div>
  )
}
