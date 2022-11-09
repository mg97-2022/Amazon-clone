import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";
import Card from "../../../components/ui/Card/Card";
import NewUserSign from "../../../components/ui/NewUserSign/NewUserSign";
import useHttp from "../../../hooks/use-http";
import { cartActions } from "../../../store/cart";
import TotalItems from "../TotalItems/TotalItems";
import classes from "./CartSidebar.module.css";

function CartSidebar() {
  const userToken = useSelector((state) => state.user.userToken);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { error, isLoading, sendRequest } = useHttp();
  const navigate = useNavigate();

  const sendCartDataToServerHandler = () => {
    if (userToken === "") {
      return;
    }
    sendRequest({
      url: `${process.env.REACT_APP_FIREBASE_PROJECT}${userToken}.json`,
      method: "POST",
      body: cartItems,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(cartActions.resetCart());
    navigate("/success");
  };

  const userLogHandler = () => {
    dispatch(cartActions.returnToCartHandler(true));
    navigate("/signin");
  };

  return (
    <Card className={classes.checkout}>
      <TotalItems align="start" />
      <button
        onClick={sendCartDataToServerHandler}
        className={`btn ${userToken === "" && classes.disable}`}
      >
        Proceed to checkout
      </button>
      {userToken === "" && (
        <Fragment>
          <p className={classes.log}>log in first</p>
          <Button onClick={userLogHandler}>Sign in</Button>
          <NewUserSign
            onClick={() => dispatch(cartActions.returnToCartHandler(true))}
          />
        </Fragment>
      )}
    </Card>
  );
}

export default CartSidebar;
