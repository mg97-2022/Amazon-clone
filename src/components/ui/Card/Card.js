import React from "react";
import classes from "./Card.module.css";

function Card({ onClick, children, className }) {
  return (
    <div onClick={onClick} className={`${className} ${classes.card}`}>
      {children}
    </div>
  );
}

export default Card;
