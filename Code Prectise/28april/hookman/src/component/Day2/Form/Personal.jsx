import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem('form-step');
    return savedStep ? parseInt(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('form-data');
    return savedData ? JSON.parse(savedData) : { name: '', email: '', age: '' };
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('form-data', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('form-step', step);
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  switch (step) {
    case 1:
      return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} prevStep={prevStep} />;
    default:
      return null;
  }
};

export default MultiStepForm;
