import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/ui/Card/Card";
import AlertMessage from "./AlertMessage/AlertMessage";
import InputFields from "./InputFields/InputFields";
import useHttp from "../../../hooks/use-http";
import classes from "./SigninForm.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user";

function SigninForm() {
  const { error, isLoading, sendRequest } = useHttp();
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUserDataHandler = useCallback((data) => {
    setUserData(data);
  }, []);

  const responseHandler = (response) => {
    const userToken = `${response.email.replace(".", "")}${response.localId}`;
    dispatch(userActions.getUserToken(userToken))
    navigate('/')
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    sendRequest({
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      method: "POST",
      body: {
        ...userData,
        returnSecureToken: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }, responseHandler);
  };

  return (
    <div className={classes.content}>
      {error && <AlertMessage error={error}/>}
      <Card className={classes.card}>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <h2>Sign in</h2>
          <InputFields onGetUserData={getUserDataHandler} />
          <button type="submit">Continue</button>
          <div className={classes.text}>
            By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
            and <span>Privacy Notice</span>.
          </div>
        </form>
      </Card>
      <div className={classes.signup}>
        <p>New to Amazon? </p>
        <Link to="/signup">Create your amazon account</Link>
      </div>
    </div>
  );
}

export default SigninForm;
