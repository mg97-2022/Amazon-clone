import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import classes from "./AddToCart.module.css";

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const itemExist = cartItems.findIndex((item) => item.id === product.id);
    if (itemExist < 0) {
      setAddedToCart(false);
    } else {
      setAddedToCart(true);
    }
  }, [cartItems, setAddedToCart, product]);

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
    setAddedToCart(true);
  };
  return (
    <div className={classes.cart}>
      {!addedToCart && <button id="cart" className="add_to_cart_btn" onClick={addToCartHandler}>add to cart</button>}
      {addedToCart && <div id="added_cart" className="add_to_cart_btn">added to cart</div>}
    </div>
  );
}

export default AddToCart;
