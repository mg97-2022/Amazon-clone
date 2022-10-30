import React, { Fragment, useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import classes from "./InputFields.module.css";

function InputFields({ onGetUserData }) {
  const { enteredValue: emailValue, inputChangeHandler: emailChangeHandler } =
    useInput((value) =>
      value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    );
  const {
    enteredValue: passwordValue,
    inputChangeHandler: passwordChangeHandler,
  } = useInput((value) => value.trim().length >= 6);

  useEffect(() => {
    onGetUserData({
      email: emailValue,
      password: passwordValue,
    });
  }, [emailValue, passwordValue, onGetUserData]);

  return (
    <Fragment>
      <div className={classes.input}>
        <label htmlFor="email">Your email</label>
        <input
          value={emailValue}
          onChange={(e) => emailChangeHandler(e.target.value)}
          type="email"
          id="email"
          placeholder=" your email"
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="password">Password</label>
        <input
          value={passwordValue}
          onChange={(e) => passwordChangeHandler(e.target.value)}
          type="password"
          id="password"
          placeholder=" At least 6 characters"
        />
      </div>
    </Fragment>
  );
}

export default InputFields;
