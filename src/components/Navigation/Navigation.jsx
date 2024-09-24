
import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';
import css from '../Navigation/Navigation.module.css';


export const Navigation = () => {
  const navLinkClass = ({ isActive }) => {
    return clsx (css.link, isActive && css.isActive);
  };

  return (
    <nav className={css.nav}>
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/contacts" className={navLinkClass}>Contacts</NavLink>
    </nav>
  )
}
