import React, { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function MainForm() {
    const [step, setStep] = useState(1)
    const [Formdata, setFormdata] = useState({
        name: "",
        age: '',
        email: ''
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((pre) => ({
            ...pre,
            [name]: value
        }))
    }


    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);


    switch (step) {
        case 1:
            return <Step1 Formdata={Formdata} nextStep={nextStep} HandleChange={HandleChange} />

        case 2:
            return < Step2 Formdata={Formdata} nextStep={nextStep} HandleChange={HandleChange} prevStep={prevStep} />

        case 3:
            return < Step3 Formdata={Formdata} prevStep={prevStep} />

        default:
            return null
    }

}

export default MainForm;