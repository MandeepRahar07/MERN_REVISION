// Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const { authState, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <div data-testid="navbar">
      <div className="name" onClick={() => navigate('/')}>
        React-OLX
      </div>
      <div data-testid="login-logout">
        {authState.isAuth ? (
          <>
            <span>Welcome, {authState.userDetails.email}!</span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
