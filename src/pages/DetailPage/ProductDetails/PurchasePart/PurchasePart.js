import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/ui/Card/Card";
import { formatNumbers } from "../../../../generalFunctions/generalFunctions";
import { cartActions } from "../../../../store/cart";
import PurchaseNumber from "./PurchaseNumber/PurchaseNumber";
import classes from "./PurchasePart.module.css";

function PurchasePart({ product }) {
  const [productQty, setProductQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const sendProductToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        ...product,
        quantity: productQty,
      })
    );
  };

  const buyNowHandler = () => {
    dispatch(
      cartActions.addToCart({
        ...product,
        quantity: 1,
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
        <button onClick={sendProductToCartHandler} className="add_to_cart_btn">
          add to cart
        </button>
        <button onClick={buyNowHandler} className="btn">
          buy now
        </button>
      </div>
    </Card>
  );
}

export default PurchasePart;
