import React from "react";
import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.loading}>
      <p>loading</p>
      <div className={classes["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
