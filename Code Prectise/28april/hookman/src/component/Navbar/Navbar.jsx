// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // CSS Module import
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    

  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={ ()=> navigate("/counterapp")}>Counter Application</li>
        <li className={styles.navItem} onClick={ ()=> navigate("/showhidepassword")}> Show/Hide Password</li>
        <li className={styles.navItem} onClick={ ()=> navigate("/todo")}>Todo List</li>
        <li className={styles.navItem} onClick={ ()=> navigate("/signup")}>Sign Up</li>
        <li className={styles.navItem} onClick={ ()=> navigate("/login")}>Log In</li>
        <li className={styles.navItem} onClick={ ()=> navigate("/search")}>Search Item</li>
      </ul>
    </div>
  );
}

export default Navbar;
