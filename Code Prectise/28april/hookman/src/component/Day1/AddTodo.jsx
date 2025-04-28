import React, { useState } from 'react';
import axios from 'axios';
import add from './AddTodo.module.css'; // Import your CSS
import { useNavigate } from 'react-router-dom';

function AddTodo() {
    const [formdata, setFormdata] = useState({
        name: "",
        status: false
    });
    const navigate = useNavigate();

    const Handlechange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: name === "status" ? value === "true" : value
        }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/todo', formdata);
            alert("Todo Added Successfully ✅");
            navigate("/todo");
            setFormdata({
                name: "",
                status: false
            });
        } catch (err) {
            console.error(err);
            alert("Failed to Add Todo ❌");
        }
    };

    return (
        <div className={add.container}>
            <div className={add.heading}>
                <h3>Add A New ToDo In The List</h3>
            </div>
            <div className={add.formcontainer}>
                <form onSubmit={handlesubmit}>
                    <ul className={add.ul}>
                        <li className={add.li}>
                            <label>Name</label><br />
                            <input
                                type="text"
                                name="name"
                                value={formdata.name}
                                placeholder="Name of Item"
                                onChange={Handlechange}
                                className={add.input}
                                required
                            />
                        </li>
                        <li className={add.li}>
                            <label>Status</label><br />
                            <select
                                name="status"
                                value={formdata.status}
                                onChange={Handlechange}
                                className={add.select}
                            >
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </li>
                    </ul>
                    <div className={add.buttoncontainer}>
                        <button type="submit" className={add.button}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTodo;
