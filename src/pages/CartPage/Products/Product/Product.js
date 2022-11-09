import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../../store/cart";
import { cartLaterActions } from "../../../../store/cartLater";
import classes from "./Product.module.css";
import ProductInput from "./ProductInput/ProductInput";

function Product({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    quantity,
    id,
    title,
    description,
    price,
    img,
  } = item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeFormCart(id));
  };

  const saveLaterHandler = () => {
    dispatch(cartLaterActions.addToLater(item));
    dispatch(cartActions.removeFormCart(id));
  };

  const showDetailHandler = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={classes.item}>
      <div className={classes.right}>
        <div onClick={showDetailHandler} className={classes.img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.details}>
          <h3>{title}</h3>
          <p className={classes.description}>{description}</p>
          <p>In Stock</p>
          <div className={classes.item_control}>
            <ProductInput quantity={quantity} item={item} />
            <button onClick={removeItemHandler}>Delete</button>
            <button onClick={saveLaterHandler}>Save for later</button>
          </div>
        </div>
      </div>
      <div className={classes.price}>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default Product;
