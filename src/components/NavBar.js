import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

import React from 'react'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to = "/" className={styles.brand}>
            <span>Social Network</span>
        </NavLink>

        <ul className={styles.links_list}>
            <li>
                <NavLink to = "/Home" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            <li>
                <NavLink to = "/About" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink>  
            </li>
            <li>
                <NavLink to = "/Login" className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink>
            </li>
            <li>
                <NavLink to = "/Register" className={({isActive}) => (isActive ? styles.active : "")}>Register</NavLink>
            </li>
            
        </ul>
    </nav>
  )
}

export default NavBar;