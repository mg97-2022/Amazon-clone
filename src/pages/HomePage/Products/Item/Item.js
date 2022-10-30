import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/ui/Card/Card";
import { cartActions } from "../../../../store/cart";
import { productDetailsActions } from "../../../../store/productDetails";
import {
  trimWord,
  formatNumbers,
} from "../../../../generalFunctions/generalFunctions";
import AddToCart from "./AddToCart/AddToCart";
import classes from "./Item.module.css";

function Item({ product }) {
  const dispatch = useDispatch();
  const [randomNumOfStars] = useState(Math.floor(Math.random() * 5 + 1));
  const navigate = useNavigate();

  const {
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
  } = product;
  const priceBeforeDiscount = Math.round(
    price * ((100 + discountPercentage) / 100)
  );

  const navToDetailPageHandler = () => {
    dispatch(
      productDetailsActions.getProductDetails({ ...product, randomNumOfStars })
    );
    navigate(`/products/${id}`);
  };

  return (
    <Card className={classes.item}>
      <div onClick={navToDetailPageHandler} className={classes.image}>
        <img loading="lazy" src={img} alt="" />
      </div>
      <h4>{title}</h4>
      <p className={classes.description}>{trimWord(description, 60)}</p>
      <div className={classes.price}>
        <span>{`$${formatNumbers(price)}`}</span>
        <div className={classes.discount}>
          <span>{`$${formatNumbers(priceBeforeDiscount)}`}</span>
          <span>{`- ${discountPercentage}%`}</span>
        </div>
      </div>
      <div className={classes.stars}>
        {Array(randomNumOfStars)
          .fill()
          .map((_, i) => {
            return <FaStar key={i} />;
          })}
      </div>
      <AddToCart product={product} />
    </Card>
  );
}

export default Item;

// image slide
// import { HiChevronRight } from "react-icons/hi";
// import { HiChevronLeft } from "react-icons/hi";

// const [imgIndex, setImgIndex] = useState(0);

// const rightHandler = () => {
//   const lastIndex = images.length - 1;
//   if (imgIndex > lastIndex) {
//     setImgIndex(0);
//     return;
//   } else {
//     setImgIndex((prev) => prev++);
//     console.log('hello')
//   }
// };

// const leftHandler = () => {
//   const lastIndex = images.length - 1;
//   if (imgIndex <= 0) {
//     setImgIndex(lastIndex);
//     return;
//   } else {
//     setImgIndex((prev) => prev--);
//   }
// };

/* <div className={classes.slide}>
          <button onClick={leftHandler}>
            <HiChevronLeft onClick={leftHandler} />
          </button>
          <button onClick={rightHandler}>
            <HiChevronRight onClick={rightHandler}/>
          </button>
        </div> */
