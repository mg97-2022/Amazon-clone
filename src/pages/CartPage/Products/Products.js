import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import TotalItems from "../TotalItems/TotalItems";
import classes from "./Products.module.css";
import EmptyCart from "../EmptyCart/EmptyCart";
import Card from "../../../components/ui/Card/Card";

function Products() {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <Card className={classes.products}>
      <div className={classes.title}>
        {cartItems.length === 0 && <EmptyCart />}
        {cartItems.length !== 0 && <h2>shopping cart</h2>}
        <p>price</p>
      </div>
      <div>
        {cartItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
      <TotalItems align="end" />
    </Card>
  );
}

export default Products;
