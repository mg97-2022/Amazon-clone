import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useHttp from "../../../hooks/use-http";
import OrderItem from "./OrderItem/OrderItem";
import { Link } from "react-router-dom";
import classes from "./OrdersContent.module.css";
import Loading from "../../../components/ui/Loading/Loading";

function OrdersContent() {
  const [orders, setOrders] = useState([]);
  const userToken = useSelector((state) => state.user.userToken);
  const {  isLoading, sendRequest } = useHttp();

  useEffect(() => {
    if (userToken !== "") {
      (async () => {
        const data = await sendRequest({
          url: `${process.env.REACT_APP_FIREBASE_PROJECT}${userToken}.json`,
        });
        const fetchedOrders = [];
        for (const key in data) {
          data[key].forEach((item) => {
            fetchedOrders.push(item);
          });
        }
        setOrders(fetchedOrders);
      })();
    }
  }, [sendRequest, userToken]);

  if (userToken === "") {
    return (
      <div className={classes.empty}>
        <h2>have no orders!</h2>
        <Link className="btn" to="/">
          let's buy Something
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={`container ${classes.orders}`}>
      <h2>Orders</h2>
      {orders.map((order, i) => (
        <OrderItem key={i} order={order} />
      ))}
    </div>
  );
}

export default OrdersContent;
