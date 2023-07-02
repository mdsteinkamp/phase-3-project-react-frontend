import { useState, useEffect } from "react"

export default function InsuranceTotal() {
  const [insuranceTotal, setInsuranceTotal] = useState(0)

  useEffect(() => {
    fetch("http://localhost:9292/insurancetotal")
      .then(resp => resp.json())
      .then(total => setInsuranceTotal(total))
  }, [])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (


    <div>
      <h2>Total Insurance: {formatter.format(insuranceTotal)} </h2>
    </div>
  )
}