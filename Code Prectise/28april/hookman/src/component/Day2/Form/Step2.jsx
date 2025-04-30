const Step2 = ({ formData, handleChange, nextStep, prevStep }) => (
    <div>
      <h2>Step 2: Age Info</h2>
      <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  export default Step2;
  