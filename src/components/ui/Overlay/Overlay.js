import React from "react";
import classes from "./Overlay.module.css";

function Overlay({ onClick }) {
  return <div onClick={onClick} className={classes.overlay} />;
}

export default Overlay;
