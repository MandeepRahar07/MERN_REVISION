import React from 'react'

function Step1({formData, handleChange, nextStep}) {
  return (
    <div>
    <div>
    <h2>Step 1: Personal Info</h2>
    <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
    <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    <button onClick={nextStep}>Next</button>
  </div>


    </div>
  )
}

export default Step1