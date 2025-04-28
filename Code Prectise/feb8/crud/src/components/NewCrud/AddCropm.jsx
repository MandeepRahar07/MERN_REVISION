import React, { useEffect, useState } from 'react';

function AddCropm() {
  const [data, setData] = useState({ crop_name: '' });
  const [edit, setEdit] = useState({ crop_name: '' });
  const [name, setName] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchdata = async () => {
    try {
      const res = await fetch('http://localhost:3001/cropdata/');
      const data = await res.json();

      if (res.ok) {
        setName(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/cropdata/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Crop added to database');
        fetchdata();
        setData({ crop_name: '' }); // Clear input field
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handledelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/cropdata/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        alert('Item deleted');
        fetchdata();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEdit({ crop_name: item.crop_name });
  };

  const handlesubmitedit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/cropdata/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(edit),
      });

      if (res.ok) {
        alert('Item updated successfully');
        fetchdata();
        setEditId(null); // Clear edit state
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add Crop</h1>
      <form onSubmit={handlesubmit}>
        <label>Name</label>
        <input
          type="text"
          name="crop_name"
          value={data.crop_name}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {name.map((item) => (
          <div key={item.id}>
            {editId === item.id ? (
              <form onSubmit={handlesubmitedit}>
                <label>Name</label>
                <input
                  type="text"
                  name="crop_name"
                  value={edit.crop_name}
                  onChange={handleEdit}
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h2>{item.crop_name}</h2>
                <button onClick={() => handledelete(item.id)}>Delete</button>
                <button onClick={() => startEdit(item)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCropm;
