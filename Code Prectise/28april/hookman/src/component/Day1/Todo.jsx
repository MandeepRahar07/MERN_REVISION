import React, { useEffect, useState } from 'react'
import axios from 'axios'
import td from './Todo.module.css'
import { useNavigate } from 'react-router-dom';

function Todo() {
    const [todo, setTodo] = useState([]);
    const navigate = useNavigate();
    const Fetchdata = async () => {
        try {
            const res = await axios.get('http://localhost:8080/todo');
            console.log(res.data);
            setTodo(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        Fetchdata();
    }, []);

    const DeleteItem = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                await axios.delete(`http://localhost:8080/todo/${id}`);
                Fetchdata();
                alert("Item Deleted Successfully");
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <div>
                <h2>Todo List</h2>
            </div>
            <div>
                <button className={td.button} onClick={() => navigate("/addtodo")}>Add New To Do</button>
            </div>
            <div>
                <table className={td.table} style={{ border: "1px solid black" }}>
                    <thead>
                        <tr className={td.thead}>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((e) => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.status ? "Complete" : "Uncomplete"}</td>
                                <td onClick={() => DeleteItem(e.id)} className={td.delete} style={{ cursor: "pointer" }}>
                                    Delete
                                </td>
                                <td className={td.delete}>
                                    Edit
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo
