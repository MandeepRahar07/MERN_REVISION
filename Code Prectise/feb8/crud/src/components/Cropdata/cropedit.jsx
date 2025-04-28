import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cropedit() {
  const [onecrop, setOnecrop] = useState({ crop_name: '' });
  const { id } = useParams();

  const Getcrop = async () => {
    try {
      const res = await fetch(`http://localhost:3001/cropdata/${id}`);
      const data = await res.json();
      setOnecrop(data);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    Getcrop();
  }, [id]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/cropdata/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(onecrop),
      });

      if (res.ok) {
        console.log('Product updated');
        alert("Product updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setOnecrop({
      ...onecrop,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Edit Crop</h2>
      <form onSubmit={handlesubmit}>  {/* Fixed onSubmit here */}
        <label htmlFor="crop_name">Crop Name</label>
        <input
          type="text"
          name="crop_name"
          value={onecrop.crop_name || ""} // Prevents undefined error
          onChange={handlechange}
        />
        <button type="submit">Submit</button>  {/* Fixed button type */}
      </form>
    </div>
  );
}

export default Cropedit;
