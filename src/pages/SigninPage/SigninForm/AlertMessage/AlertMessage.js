import React from "react";
import { RiAlertLine } from "react-icons/ri";
import classes from "./AlertMessage.module.css";

function AlertMessage({ error }) {
  return (
    <div className={classes.alert}>
      <div>
        <RiAlertLine />
      </div>
      <div>
        <p>There was a problem</p>
        {error.match(/password/gi) && <p>Invalid Password</p>}
        {error.match(/email/gi) && (
          <p>We cannot find an account with that email address</p>
        )}
      </div>
    </div>
  );
}

export default AlertMessage;
