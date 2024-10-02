import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const navLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={navLinkClass}>
        Home
      </NavLink>
      {IsLoggedIn && (
        <NavLink to="/contacts" className={navLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
