import React from "react";
import GeneralLayout from "../../../components/GeneralLayout/GeneralLayout";
import { RiAlertFill } from "react-icons/ri";
import classes from "./EmailExistPage.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EmailExistPage() {
  const userEmail = useSelector((state) => state.user.userEmail);
  return (
    <GeneralLayout>
      <div className={classes.container}>
        <div className={classes.alert}>
          <div>
            <RiAlertFill />
          </div>
          <div>
            <p>Email address already in use</p>
            <p>
              You indicated you're a new customer, but an account already exists
              with the email address
              <br />
              <span>{userEmail}</span>
            </p>
          </div>
        </div>
        <div className={classes.text}>
          <p>Are you a returning customer?</p>
          <Link to="/signin">Sign-In</Link>
          <p></p>
          <div>
            <p>Create a new account with</p>
            <Link to="/signup">a different e-mail address</Link>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default EmailExistPage;
