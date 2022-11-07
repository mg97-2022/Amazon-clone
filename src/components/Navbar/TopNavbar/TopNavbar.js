import React, { useState } from "react";
import image from "../../../assets/amzn_logo_squid_noto_email_v2016_uk-main._CB463270308_-removebg-preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import classes from "./TopNavbar.module.css";
import SideList from "./SideList/SideList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import { userActions } from "../../../store/user";
import SignMessage from "./SignMessage/SignMessage";

function TopNavbar({ home }) {
  const [showList, setShowList] = useState(false);
  const showSideListHandler = () => {
    setShowList((prev) => !prev);
  };

  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const cartItemsLength = useSelector((state) => state.cart.cart).length;
  const message = useSelector((state) => state.signMessage.signMessage);

  const signOutHandler = () => {
    dispatch(userActions.getUserToken(""));
  };

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        <img src={image} alt="amazon" />
      </Link>
      <div className={classes.line_break}></div>
      <SearchBar />
      <div className={classes.right}>
        {userToken === "" && (
          <div className={classes.sign}>
            <Link to="/signin">
              <p>Hello</p>
              <p>Sign in</p>
            </Link>
            {message && home && <SignMessage />}
          </div>
        )}
        {userToken !== "" && (
          <button onClick={signOutHandler}>
            <p>Hello</p>
            <p>Sign out</p>
          </button>
        )}

        <Link to="/orders">
          <p>Orders</p>
        </Link>
        <Link to="/cart">
          <span>{cartItemsLength}</span>
          <AiOutlineShoppingCart className={classes.cart} />
          <p>Cart</p>
        </Link>
      </div>
      <div onClick={showSideListHandler} className={classes.bars}>
        <FaBars />
      </div>
      <SideList showList={showList} onShowList={showSideListHandler} />
    </header>
  );
}

export default TopNavbar;
