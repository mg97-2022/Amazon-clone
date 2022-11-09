import React, { Fragment, useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import { IoAlertOutline } from "react-icons/io5";
import classes from "./InputFields.module.css";

function InputFields({ onGetUserData, invalidInput, onValidFormHandler }) {
  const {
    enteredValue: nameValue,
    validInput: validName,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isChanging: nameIsChanging,
  } = useInput((value) => value.trim().length > 0);
  const {
    enteredValue: emailValue,
    validInput: validEmail,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isChanging: emailIsChanging,
  } = useInput((value) =>
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  );
  const {
    enteredValue: passwordValue,
    validInput: validPassword,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    isChanging: passwordIsChanging,
  } = useInput((value) => value.trim().length >= 6);
  const {
    enteredValue: confirmPasswordValue,
    validInput: validConfirmPassword,
    hasError: confirmPasswordHasError,
    inputChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    isChanging: confirmPasswordIsChanging,
  } = useInput((value) => value === passwordValue);

  const validForm =
    validName && validEmail && validPassword && validConfirmPassword;

  useEffect(() => {
    onValidFormHandler(validForm);
  }, [validForm, onValidFormHandler]);

  // send user Data to form
  useEffect(() => {
    onGetUserData({
      email: emailValue,
      password: passwordValue,
    });
  }, [onGetUserData, emailValue, passwordValue]);

  // show error text
  const nameText =
    (nameHasError || (invalidInput && !validName)) && !nameIsChanging;
  const emailText =
    (emailHasError || (invalidInput && !validEmail)) && !emailIsChanging;
  const passwordText =
    (passwordHasError || (invalidInput && !validPassword)) &&
    !passwordIsChanging;
  const confirmPasswordText =
  ((invalidInput)) &&
    !confirmPasswordIsChanging;
    // confirmPasswordHasError && !confirmPasswordIsChanging;

  // input error class
  const nameInput = nameHasError || (invalidInput && !validName);
  const emailInput = emailHasError || (invalidInput && !validEmail);
  const passwordInput = passwordHasError || (invalidInput && !validPassword);
  const confirmPasswordInput = confirmPasswordHasError;

  return (
    <Fragment>
      <div className={`${classes.input} ${nameInput && classes.has_error}`}>
        <label htmlFor="name">Your name</label>
        <input
          onChange={(e) => nameChangeHandler(e.target.value)}
          onBlur={nameBlurHandler}
          value={nameValue}
          type="text"
          id="name"
          // autoFocus
          placeholder="First and last name"
        />
        {nameText && (
          <p>
            <IoAlertOutline /> Enter your name
          </p>
        )}
      </div>
      <div className={`${classes.input} ${emailInput && classes.has_error}`}>
        <label htmlFor="email">Your email</label>
        <input
          value={emailValue}
          onChange={(e) => emailChangeHandler(e.target.value)}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
          placeholder=" your email"
        />
        {emailText && (
          <Fragment>
            <p>
              {emailValue.trim().length === 0 ? (
                <Fragment>
                  <IoAlertOutline />
                  Enter your email
                </Fragment>
              ) : (
                <Fragment>
                  <IoAlertOutline />
                  Wrong or Invalid email address. Please correct and try again.
                </Fragment>
              )}
            </p>
          </Fragment>
        )}
      </div>
      <div className={`${classes.input} ${passwordInput && classes.has_error}`}>
        <label htmlFor="password">Password</label>
        <input
          value={passwordValue}
          onChange={(e) => passwordChangeHandler(e.target.value)}
          onBlur={passwordBlurHandler}
          type="password"
          id="password"
          placeholder=" At least 6 characters"
        />
        {passwordText && (
          <p>
            <IoAlertOutline /> Minimum 6 characters required
          </p>
        )}
      </div>
      <div
        className={`${classes.input} ${
          confirmPasswordInput && classes.has_error
        }`}
      >
        <label htmlFor="confirmPass">Re-enter password</label>
        <input
          value={confirmPasswordValue}
          onBlur={confirmPasswordBlurHandler}
          onChange={(e) => confirmPasswordChangeHandler(e.target.value)}
          type="password"
          id="confirmPass"
        />
        {confirmPasswordText && (
          <p>
            <IoAlertOutline />{" "}
            {(confirmPasswordValue.length === 0)
              ? "Type your password again"
              : "Passwords must match"}
          </p>
        )}
      </div>
    </Fragment>
  );
}

export default InputFields;
