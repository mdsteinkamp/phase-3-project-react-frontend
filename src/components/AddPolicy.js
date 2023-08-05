import { useState } from "react"
import { useParams } from "react-router-dom"


export default function AddPolicy({ clients, onAddPolicy }) {
  const { id } = useParams()
  const [client, setClient] = useState(null)
  const [formData, setFormData] = useState({
    carrier: "",
    product:"",
    policy_date:"",
    policy_number: "",
    face_amount: "",
    conversion_expiry: "",
    purpose: "",
    rate_class: "",
    status: "",
    client_id: id,
  })

  const clientFromFind = clients.find(client => client.id === parseInt(id))
  console.log(formData)


  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleAddPolicy(newPolicy) {
    console.log(newPolicy)
    onAddPolicy(newPolicy, id)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/policies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(newPolicy => handleAddPolicy(newPolicy))
  }

  if (!clientFromFind) return <h2>Loading Client Info...</h2>

  return (
    <div>
      <h1>Add Policy for {clientFromFind.first_name} {clientFromFind.last_name}</h1>
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
        <label>Policy Date: </label>
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
        <label>Conversion Expiration: </label>
        <input 
          type="date"
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
          <option value="active">Active</option>
          <option value="lapsed">Lapsed</option>
        </select>

        <br />
        <button>Add</button>
      </form>

    </div>
  )
}

{/* <input 
type="text"
name="status"
placeholder="In Force/Not In Force"
value={formData.active}
onChange={handleChange}
/> */}