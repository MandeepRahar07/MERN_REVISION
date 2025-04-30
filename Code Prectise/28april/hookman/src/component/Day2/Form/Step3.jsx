import React from 'react';
import axios from 'axios';

const Step3 = ({ formData, prevStep }) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit', formData); 
      console.log('Form submitted:', response.data);

      // Optional: Clear localStorage
      localStorage.removeItem('form-data');
      localStorage.removeItem('form-step');

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div>
      <h2>Review Your Info</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
