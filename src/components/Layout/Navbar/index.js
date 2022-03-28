import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>Decentra</h2>

      <ul className={styles.link_list}>
        <li className={styles.link_list_item}>
          <NavLink to={"/"} className={styles.link_nav}>
            Home
          </NavLink>
        </li>

        <li className={styles.link_list_item}>
          <NavLink to={"/About"} className={styles.link_nav}>
            About
          </NavLink>
        </li>

        <li className={styles.link_list_item}>
          <a href={"https://forms.gle/v8Z4bVbSuweDRDcLA"} target={"_blank"} className={styles.link_nav}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
