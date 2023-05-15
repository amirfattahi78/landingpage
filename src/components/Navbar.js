import React from 'react';
import {Link } from "react-router-dom"
import logo from "../images/Logo.png"
import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">Home Page</Link></li>
                   
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                   
                </ul>
            </div>
            <div>
            <img className={styles.logo} src={logo} alt='Logo'></img>
            </div>
           
        </header>
    );
};

export default Navbar;