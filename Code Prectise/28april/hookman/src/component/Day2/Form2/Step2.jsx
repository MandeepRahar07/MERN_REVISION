import React from 'react'

function Step2({ Formdata, HandleChange, nextStep, prevStep }) {
    return (
        <div>
            <div>
                 <h2>Step 2: Other Info</h2>
                <label htmlFor="">email</label>
                <input type="text" name='email' onChange={HandleChange} value={Formdata.email} />
                <input type="text" name='age' onChange={HandleChange} value={Formdata.age} />
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    )
}

export default Step2