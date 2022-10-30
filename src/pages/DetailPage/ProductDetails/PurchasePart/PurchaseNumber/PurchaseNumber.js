import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import classes from "./PurchaseNumber.module.css"
function PurchaseNumber({onGetProductsNumber}) {
  const [quantityValue, setQuantityValue] = useState(1);

  const quantityChangeHandler = (e) => {
    setQuantityValue(e.target.value);
    onGetProductsNumber(e.target.value)
    
  };
  return (
    <div className={classes.input}>
      <label htmlFor="qty-purchase">Qty:</label>
      <input
        id="qty-purchase"
        type="number"
        onChange={quantityChangeHandler}
        value={quantityValue}
        min="1"
      />
    </div>
  );
}

export default PurchaseNumber
