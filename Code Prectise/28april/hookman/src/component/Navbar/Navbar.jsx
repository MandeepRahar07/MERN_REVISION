// Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css'; // CSS Module import
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();



  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => navigate("/counterapp")}>Counter Application</li>
        <li className={styles.navItem} onClick={() => navigate("/showhidepassword")}> Show/Hide Password</li>
        <li className={styles.navItem} onClick={() => navigate("/todo")}>Todo List</li>
        <li className={styles.navItem} onClick={() => navigate("/signup")}>Sign Up</li>
        <li className={styles.navItem} onClick={() => navigate("/login")}>Log In</li>
        <li className={styles.navItem} onClick={() => navigate("/search")}>Search Item</li>
        <li className={styles.navItem} onClick={() => navigate("/form")}>Form</li>
        <li className={styles.navItem} onClick={() => navigate("/form1")}>Form 2</li>
        <li className={styles.navItem} onClick={() => navigate("/pagination")}>Paginaion</li>
        <li className={styles.navItem} onClick={() => navigate("/modal")}>Modal</li>
        <li className={styles.navItem} onClick={() => navigate("/image")}>Image</li>
        <li className={styles.navItem} onClick={() => navigate("/accordian")}>Accor</li>
        <li className={styles.navItem} onClick={() => navigate("/stopwatch")}>Watch</li>
        <li className={styles.navItem} onClick={() => navigate("/drop")}>DropDown</li>
        <li className={styles.navItem} onClick={() => navigate("/sort")}>Sort</li>
        <li className={styles.navItem} onClick={() => navigate("/theme")}>Theme</li>
        <li className={styles.navItem} onClick={() => navigate("/dynemicform")}>Form</li>
        <li className={styles.navItem} onClick={() => navigate("/dragreport")}>Drag</li>
        <li className={styles.navItem} onClick={() => navigate("/table")}>Table</li>
        <li className={styles.navItem} onClick={() => navigate("/crousal")}>Crousal</li>
      </ul>
    </div>
  );
}

export default Navbar;
