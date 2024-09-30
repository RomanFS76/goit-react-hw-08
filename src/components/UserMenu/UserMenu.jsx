import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user.name);

  return (
    <div className={css.menuWrap}>
      <p>Welcome {user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
        className={css.logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
