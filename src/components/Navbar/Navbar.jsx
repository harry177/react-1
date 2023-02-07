import React from "react";
import classes from "./Navbar.module.css";

const customColor = "blue";
const myObj = { color: customColor, fontFamily: "Georgia" };

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>Profile</div>
      <div className={`${classes.item} ${classes.active}`}>Messages</div>
      <div className={classes.item}>News</div>
      <div style={myObj}>Music</div>
      <div className={classes.item}>Settings</div>
    </nav>
  );
};

export default Navbar;
