import React from "react";
import classes from "./Card.module.css";

function Card({ children, className }) {
  return <div className={`${className} ${classes.card}`}>{children}</div>;
}

export default Card;
