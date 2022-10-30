import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../ui/Card/Card";
import NewUserSign from "../../../ui/NewUserSign/NewUserSign";
import classes from "./SignMessage.module.css";


function SignMessage() {
  return (
    <Card className={classes.message}>
      <Link to="/signin" className={`btn`}>
        sign in
      </Link>
      <NewUserSign />
    </Card>
  );
}

export default SignMessage;
