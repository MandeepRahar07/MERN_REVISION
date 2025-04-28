import React, { useState } from 'react';

function Addcrop() {
  const [crop, setCrop] = useState({
    crop_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrop({ ...crop, [name]: value });
  };

  const addCrop = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    try {
      const res = await fetch("http://localhost:3001/cropdata/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(crop),
      });

      const data = await res.json(); // Convert response to JSON

      if (res.ok) {
        console.log("Crop Added:", data);
        setCrop({ crop_name: "" }); // Clear input after adding
      } else {
        console.error("Failed to add crop:", data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <h2>Add a Crop</h2>
      <form onSubmit={addCrop}>
        <label>Crop Name:</label>
        <input
          name="crop_name"
          value={crop.crop_name}
          onChange={handleChange}
          type="text"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addcrop;
