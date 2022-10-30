import React from "react";
import classes from "./Button.module.css";

function Button({ children, className }) {
  return <button className={`${classes.btn} ${className}`}>{children}</button>;
}

export default Button;
