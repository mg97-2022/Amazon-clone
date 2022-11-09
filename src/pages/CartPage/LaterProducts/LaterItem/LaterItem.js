import React from "react";
import classes from "./LaterItem.module.css";
import { trimWord } from "../../../../generalFunctions/generalFunctions";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart";
import { cartLaterActions } from "../../../../store/cartLater";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/ui/Card/Card";
function LaterItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    quantity,
    discountPercentage,
    id,
    brand,
    category,
    rating,
    stock,
    title,
    description,
    price,
    img,
    images,
  } = item;

  const moveToCartHandler = () => {
    dispatch(cartActions.addToCart(item));
    dispatch(cartLaterActions.removeFormLater(id));
  };

  const removeItemHandler = () => {
    dispatch(cartLaterActions.removeFormLater(id));
  };

  const showDetailHandler = () => {
    navigate(`/products/${id}`)
  }

  return (
    <Card className={classes.item}>
      <div onClick={showDetailHandler} className={classes.img}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p className={classes.desc}>{trimWord(description, 50)}</p>
      <span className={classes.price}>{`$${price}`}</span>
      <span>In Stock</span>
      <button onClick={moveToCartHandler} className="btn">
        Move To Cart
      </button>
      <button onClick={removeItemHandler} className="btn">
        Delete
      </button>
    </Card>
  );
}

export default LaterItem;
