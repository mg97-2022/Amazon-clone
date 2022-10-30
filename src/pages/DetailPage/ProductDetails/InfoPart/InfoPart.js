import React from "react";
import { FaStar } from "react-icons/fa";
import Card from "../../../../components/ui/Card/Card";
import classes from "./InfoPart.module.css";

function InfoPart({ details }) {
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
  } = details;

  const priceBeforeDiscount = Math.round(
    price * ((100 + discountPercentage) / 100)
  );

  return (
    <Card className={classes.info}>
      <div className={classes.top}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={classes.stars}>
          {Array(randomNumOfStars)
            .fill()
            .map((_, i) => {
              return <FaStar key={i} />;
            })}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.cost}>
          <span className={classes.price}>{`$${price}`}</span>
          <span className={classes.discount}>{`- ${discountPercentage}%`}</span>
          <span className={classes.old_price}>{`$${priceBeforeDiscount}`}</span>
        </div>
        <div className={classes.more_details}>
          <div>
            <p>brand</p>
            <p>category</p>
            <p>rating</p>
            <p>stock</p>
          </div>
          <div>
            <p>{brand}</p>
            <p>{category}</p>
            <p>{rating}</p>
            <p>{stock}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default InfoPart;
