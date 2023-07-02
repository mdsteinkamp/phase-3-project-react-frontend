import { useState, useEffect } from "react"

export default function InsuranceTotal() {
  const [insuranceTotal, setInsuranceTotal] = useState(0)

  useEffect(() => {
    fetch("http://localhost:9292/insurancetotal")
      .then(resp => resp.json())
      .then(total => setInsuranceTotal(total))
  }, [])

  return (


    <div>
      <h2>Total Insurance: ${insuranceTotal} </h2>
    </div>
  )
}