import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import TopNavbar from "../../components/Navbar/TopNavbar/TopNavbar";
import CartSidebar from "./CartSidebar/CartSidebar";
import Products from "./Products/Products";
import classes from "./CartPage.module.css";
import LaterProducts from "./LaterProducts/LaterProducts";
import { useSelector } from "react-redux";

function CartPage() {
  const [cartHasItems, setCartHasItems] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    if (cartItems.length === 0) {
      setCartHasItems(false);
    } else {
      setCartHasItems(true);
    }
  }, [cartItems]);

  return (
    <div className={classes.cart}>
      <TopNavbar />
      <div className={classes.content}>
        <Products />
        {cartHasItems && <CartSidebar />}
        <LaterProducts />
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
