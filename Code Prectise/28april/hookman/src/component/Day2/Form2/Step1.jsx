import React from 'react'

function Step1({Formdata, HandleChange, nextStep}) {

  return (

    <div>
        <div>
        <h2>Step 1: Personal Info</h2>
            <label htmlFor="">Name</label>
            <input type="text" name='name' onChange={HandleChange} value={Formdata.name} />
            <button onClick={nextStep}>Next</button>
        </div>
    </div>
  )
}

export default Step1;