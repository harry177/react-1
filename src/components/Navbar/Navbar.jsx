import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const customColor = "blue";
const myObj = { color: customColor, fontFamily: "Georgia" };

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <Link to="/profile"> Profile </Link>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" className={({ isActive }) =>
      isActive ? classes.active : undefined
    }>Messages</NavLink>
      </div>
      <div className={classes.item}>News</div>
      <div style={myObj}>Music</div>
      <div className={classes.item}>Settings</div>
    </nav>
  );
};

export default Navbar;
