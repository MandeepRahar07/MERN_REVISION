// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
   console.log(isAuth);
  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <Link to="/">
          <img
            src="/watch.png"
            width="60px"
            alt="logo"
            style={{ display: "block" }}
          />
        </Link>
      </div>

      <div>
        {isAuth ? (
        
          <div>Logout</div>
        ) : (
   
          <Link to="/login" data-testid="navbar-login-button">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
