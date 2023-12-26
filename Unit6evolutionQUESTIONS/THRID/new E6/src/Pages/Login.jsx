// Import necessary dependencies
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";

// Create a component for the login form
const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    dispatch(login({ email, password }));


    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="login-email"
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="login-password"
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
