import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import classes from "./ProductInput.module.css";

function ProductInput({ quantity, item }) {
  const [quantityValue, setQuantityValue] = useState(quantity);
  const dispatch = useDispatch();

  const quantityChangeHandler = (e) => {
    setQuantityValue(e.target.value);
    const newQuantity = e.target.value;
    dispatch(cartActions.addToCart({ ...item, quantity: newQuantity }));
  };
  return (
    <div className={classes.input}>
      <label htmlFor="qty">Qty:</label>
      <input
        id="qty"
        type="number"
        onChange={quantityChangeHandler}
        value={quantityValue}
        min="1"
      />
    </div>
  );
}

export default ProductInput;
