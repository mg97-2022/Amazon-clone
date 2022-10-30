import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./EmptyCart.module.css";

function EmptyCart() {
  const userToken = useSelector((state) => state.user.userToken);
  return (
    <div className={classes.content}>
      <div className={classes.img}>
        <img
          src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
          alt=""
        />
      </div>
      <div className={classes.links}>
        <h2>
          Your Amazon Cart <span>Is Empty</span>
        </h2>
        <ul>
          <li>
            <Link to="/">Shop products</Link>
          </li>
          {userToken === "" && (
            <Fragment>
              <li>
                <Link className="btn" to="/signin">
                  Sign in to your account
                </Link>
              </li>
              <li>
                {" "}
                <Link className="btn" to="/signup">
                  Sign up now
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}

export default EmptyCart;
