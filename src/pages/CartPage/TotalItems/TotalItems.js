import React from "react";
import { useSelector } from "react-redux";
import classes from "./TotalItems.module.css";

function TotalItems({ align }) {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalNumOfItems = cartItems.reduce((total, item) => {
    return total + +item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (+item.quantity * +item.price);
  }, 0);

  return (
    <div
      className={classes.total}
      style={{
        textAlign: align,
      }}
    >
      <p>
        {`Subtotal (${totalNumOfItems} items): `}
        <span>{`$${totalPrice}`}</span>
      </p>
    </div>
  );
}

export default TotalItems;
