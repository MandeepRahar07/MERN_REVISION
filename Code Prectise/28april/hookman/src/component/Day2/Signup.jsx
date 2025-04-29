import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import sg from './Singup.module.css';

function Signup() {
    const navigate = useNavigate();
    const [Signup, setSignup] = useState({
        email: "",
        password: ""
    });

    const Handlechange = (e) => {
        setSignup((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }));
    };

    const Handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/user`, Signup)
            alert("Sign Up Successfully");
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={sg.mainbox}>
            <div className={sg.formcontainer}>
                <div className={sg.heading}>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={Handlesubmit}>
                    <div className={sg.listitem}>
                        <ul>
                            <li>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={Signup.email}
                                    placeholder="Write Your Email"
                                    onChange={Handlechange}
                                    required
                                />
                            </li>
                            <li>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={Signup.password}
                                    placeholder="Add a Password"
                                    onChange={Handlechange}
                                    required
                                />
                            </li>
                        </ul>
                    </div>
                    <div className={sg.buttonbox}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
