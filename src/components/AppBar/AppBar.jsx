import React from "react";
import css from "../AppBar/AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import { Navigation } from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  return (
    <div>
      <header className={css.header}>
        <Navigation />
        {/* <UserMenu /> */}
        <AuthNav />
      </header>
    </div>
  );
};

export default AppBar;
