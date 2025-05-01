import React, { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleChange = (index, e) => {
    const newFields = [...fields];
    newFields[index].value = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { value: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted values:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Dynamic Form</h3>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Field ${index + 1}`}
            style={{ marginRight: '10px' }}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
