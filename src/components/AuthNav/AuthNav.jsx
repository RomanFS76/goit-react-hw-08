import React from 'react'
import { Link } from 'react-router-dom'
import css from "../AuthNav/AuthNav.module.css";


const AuthNav = () => {
  return (
    <div className={css.authWrap}>
      <Link to="/register" className={css.authLink}>Register</Link>
      <Link to="/login" className={css.authLink}>Log In</Link>
    </div>
  )
}

export default AuthNav;