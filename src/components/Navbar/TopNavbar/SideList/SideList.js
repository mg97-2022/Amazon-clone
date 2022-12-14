import React, { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import Overlay from "../../../ui/Overlay/Overlay";

import classes from "./SideList.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/user";

function SideList({ showList, onShowList }) {
  const userToken = useSelector((state) => state.user.userToken);
  const cartItemsLength = useSelector((state) => state.cart.cart).length;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = () => {
    dispatch(userActions.getUserToken(""));
  };

  return (
    <Fragment>
      {showList && <Overlay onClick={onShowList} />}
      <div
        className={classes.list}
        style={{
          right: showList ? "0" : "-500px",
        }}
      >
        <div className={classes.top}>
          {userToken === "" && (
            <Link to="/signin" className={classes.user}>
              <FaUserCircle />
              <p>Hello, sign in</p>
            </Link>
          )}
          {userToken !== "" && (
            <button className={classes.user} onClick={signoutHandler}>
              <FaUserCircle />
              sign out
            </button>
          )}
          <span onClick={onShowList}>
            <RiCloseFill />
          </span>
        </div>
        <ul className={classes.bottom}>
          <li onClick={() => navigate("/orders")}>Orders</li>
          <li className={classes.cart} onClick={() => navigate("/cart")}>
            <span>{cartItemsLength}</span>
            <AiOutlineShoppingCart />
            <p>Cart</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default SideList;
