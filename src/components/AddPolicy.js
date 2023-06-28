import { useState } from "react"

export default function AddPolicy() {
  const [formData, setFormData] = useState({
    carrier: "",
    product:"",
    policy_date:"",
    policy_number: "",
    face_amount: "",
    conversion_expiry: "",
    purpose: "",
    rate_class: "",
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
      .then(newPolicy => console.log(newPolicy))
  }
  
  return (
    <div>
      <h1>Add Policy</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Add</button>
      </form>

    </div>
  )
}