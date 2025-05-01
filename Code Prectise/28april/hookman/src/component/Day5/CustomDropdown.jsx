import React, { useState } from 'react';

function SimpleDropdown() {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Ram', 'Syam', 'Mandy'];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div style={{ width: 200, margin: '20px auto', position: 'relative' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: '1px solid gray',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: '#f9f9f9'
        }}
      >
        {selected || 'Select an option'}
      </div>
      {isOpen && (
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          border: '1px solid gray',
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1
        }}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #ddd'
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SimpleDropdown;
