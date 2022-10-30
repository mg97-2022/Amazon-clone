import React from "react";
import { Link } from "react-router-dom";
import LayoutFooter from "./LayoutFooter/LayoutFooter";
import classes from "./GeneralLayout.module.css";

function GeneralLayout({ children }) {
  return (
    <div className={` ${classes.content}`}>
      <Link to="/" className={classes.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.children}>
        <div>{children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default GeneralLayout;
