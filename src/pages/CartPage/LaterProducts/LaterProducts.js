import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../components/ui/Card/Card";
import LaterItem from "./LaterItem/LaterItem";
import classes from "./LaterProducts.module.css";
function LaterProducts() {
  const laterItems = useSelector((state) => state.cartLater.cartLater);
  return (
    <Card className={classes.later}>
      <h2>
        {laterItems.length === 0
          ? "No items saved for later"
          : `Saved for later (${laterItems.length} item)`}
      </h2>
      <div className={classes.items}>
        {laterItems.map((item) => (
          <LaterItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}

export default LaterProducts;
