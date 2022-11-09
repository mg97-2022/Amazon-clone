import React from "react";
import Card from "../../../../components/ui/Card/Card";
import classes from "./OrderItem.module.css";

function OrderItem({ order }) {
  const {
    title,
    description,
    price,
    img,
  } = order;
  return (
    <Card className={classes.order}>
      <div className={classes.img}>
        <img loading="lazy" src={img} alt="" />
      </div>
      <div className={classes.info}>
        <p>{title}</p>
        <p>{description}</p>
        <span>{`$${price}`}</span>
      </div>
    </Card>
  );
}

export default OrderItem;
