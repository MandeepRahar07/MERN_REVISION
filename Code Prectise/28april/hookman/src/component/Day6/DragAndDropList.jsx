import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Mango',
    'Orange'
  ]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems[draggedItemIndex];
    newItems.splice(draggedItemIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggedItemIndex(null);
  };

  return (
    <div  >
      <h3>Drag and Drop List</h3>
      <ul style={{ listStyle: 'none', padding: "140px" }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '10px 15px',
              marginBottom: '8px',
              backgroundColor: '#f0f0f0',
              cursor: 'grab',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
