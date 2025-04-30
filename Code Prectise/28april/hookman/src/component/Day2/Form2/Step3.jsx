import axios from 'axios';
import React from 'react'

function Step3({ Formdata, prevStep }) {
    const handlesubmmit = async () => {
        try {
            const res = await axios.post(`http://localhost:8080/Detail`, Formdata);
            alert("Form submited Successfully");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div>
                <h3>Name: {Formdata.name}</h3>
                <h3>Age: {Formdata.age}</h3>
                <h3>Email: {Formdata.email}</h3>
            </div>
            <button onClick={prevStep}>Previous</button>
            <button onClick={handlesubmmit}>Submit</button>
        </div>
    )
}

export default Step3;
