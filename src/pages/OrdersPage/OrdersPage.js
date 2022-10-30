import React, { Fragment } from "react";
import TopNavbar from "../../components/Navbar/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import OrdersContent from "./OrdersContent/OrdersContent";
import classes from './OrdersPage.module.css'

function OrdersPage() {
  return (
    <div className={classes.content}>
      <TopNavbar />
        <OrdersContent />
      <Footer />
    </div>
  );
}

export default OrdersPage;
