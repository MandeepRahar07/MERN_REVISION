import React, {  useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import lg from './Login.module.css';
function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLogin((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8080/user`);
            console.log(res.data);
            const finduser = res.data.find(
                (user) => user.email === login.email && user.password === login.password
            );
            if (finduser) {
                alert("Login Successful!");
                localStorage.setItem('userId', finduser.id);
                navigate('/todo');
            } else {
                alert("Invalid Credentials");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={lg.mainbox}>
            <div className={lg.formboxmain}>
                <div className={lg.container}>

               
            <div className={lg.heading}>
                <h2>Log In</h2>
            </div>
            <div className={lg.formbox}>
            <form onSubmit={handlesubmit}>
                <div className={lg.listitem}>
                    <ul>
                        <li>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={login.email}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={login.password}
                                onChange={handleChange}
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <button style={{
                     padding : "10px",
                     color : "red",
                     border : "red",
                     borderRadius : "10px",
                     fontSize : '20px',
                     fontWeight : "700",
                     marginRight : "-9px"
                    
                    }} type="submit">Submit</button>
                </div>
            </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Login;
