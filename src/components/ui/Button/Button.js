import React from "react";
import classes from "./Button.module.css";

function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`${classes.btn} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
