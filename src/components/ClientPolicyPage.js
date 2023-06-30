import React from 'react';

export default function ClientPolicyPage({ policy }) {

  return (
    <div>
          <h2>{policy.carrier} #{policy.policy_number}</h2>
          <p>Policy Date: {policy.policy_date}</p>
          <p>Face Amount: ${policy.face_amount.toLocaleString()}</p>
          <p>Product: {policy.product}</p>
          <p>Conversion Expires: {policy.conversion_expiry}</p>
    </div>
  )
}
