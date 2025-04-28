import React, { useState } from 'react';

function BookAdd() {
  const [Book, setBook] = useState({
    crop_name: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
  
    setBook((prevBook) => ({
      ...prevBook, // Ensure prevBook is always an object
      [name]: value
    }));
  };
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/cropdata/`, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(Book),
      });
const data = res.json();
      if (res.ok) {
        console.log("Crop Added:", data);
        alert("Book added successfully");
        setBook({ crop_name: "" }); // Reset input field after submission
      } else {
        alert("Failed to add book");
      }
    } catch (err) {
      console.log(err);
      alert("An error occurred while adding the book");
    }
  };

  return (
    <div>
      <h2>Book Add</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="crop_name">Book Name</label>
        <input
          type="text"
          name="crop_name"
          value={Book.crop_name}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookAdd;
