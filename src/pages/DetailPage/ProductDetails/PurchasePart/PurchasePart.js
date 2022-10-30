import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/ui/Card/Card";
import { formatNumbers } from "../../../../generalFunctions/generalFunctions";
import { cartActions } from "../../../../store/cart";
import AddToCart from "../../../HomePage/Products/Item/AddToCart/AddToCart";
import PurchaseNumber from "./PurchaseNumber/PurchaseNumber";
import classes from "./PurchasePart.module.css";

function PurchasePart({ product }) {
  const [productQty, setProductQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const {
    discountPercentage,
    randomNumOfStars,
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
  } = product;

  const getProductNumberHandler = (productQuantity) => {
    setProductQty(productQuantity);
  };

  const buyNowHandler = () => {
    dispatch(
      cartActions.addToCart({
        ...product,
        quantity: productQty,
      })
    );
    navigate("/cart");
  };

  return (
    <Card className={classes.purchase}>
      <span>{`$${formatNumbers(price)}`}</span>
      <div>
        <PurchaseNumber onGetProductsNumber={getProductNumberHandler} />
      </div>
      <div className={classes.btns}>
        <AddToCart quantity={productQty} product={product} />
        <button onClick={buyNowHandler} className="btn">
          buy now
        </button>
      </div>
    </Card>
  );
}

export default PurchasePart;
