import React from "react";
import { Link } from "react-router-dom";
import NewUserSign from "../../ui/NewUserSign/NewUserSign";
import classes from "./FooterSign.module.css";

function FooterSign() {
  return (
    <div className={classes.content}>
      <p>See personalized recommendations</p>
      <Link className="btn" to="/signin">
        Sign in
      </Link>
      <NewUserSign />
    </div>
  );
}

export default FooterSign;
