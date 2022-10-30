import React from "react";
import classes from "./FooterFirst.module.css";

function FooterFirst() {
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <div className={classes.column}>
          <p>Get to Know Us</p>
          <ul>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>About Amazon</span>
            </li>
            <li>
              <span>Investor Relations</span>
            </li>
            <li>
              <span>Amazon Devices</span>
            </li>
            <li>
              <span>Amazon Science</span>
            </li>
          </ul>
        </div>
        <div className={classes.column}>
          <p>Make Money with Us</p>
          <ul>
            <li>
              <span>Sell products on Amazon</span>
            </li>
            <li>
              <span>Sell on Amazon Business</span>
            </li>
            <li>
              <span>Sell apps on Amazon</span>
            </li>
            <li>
              <span>Become an Affiliate</span>
            </li>
            <li>
              <span>Advertise Your Products</span>
            </li>
            <li>
              <span>Self-Publish with Us</span>
            </li>
            <li>
              <span>Host an Amazon Hub</span>
            </li>
            <li>
              <span>See More Make Money with Us</span>
            </li>
          </ul>
        </div>
        <div className={classes.column}>
          <p>Amazon Payment Products</p>
          <ul>
            <li>
              <span>Amazon Business Card</span>
            </li>
            <li>
              <span>Shop with Points</span>
            </li>
            <li>
              <span>Reload Your Balance</span>
            </li>
            <li>
              <span>Amazon Currency Converter</span>
            </li>
          </ul>
        </div>
        <div className={classes.column}>
          <p>Let Us Help You</p>
          <ul>
            <li>
              <span>Amazon and COVID-19</span>
            </li>
            <li>
              <span>Your Account</span>
            </li>
            <li>
              <span>Your Orders</span>
            </li>
            <li>
              <span>Shipping Rates &amp; Policies</span>
            </li>
            <li>
              <span>Returns &amp; Replacements</span>
            </li>
            <li>
              <span>Manage Your Content and Devices</span>
            </li>
            <li>
              <span>Amazon Assistant</span>
            </li>
            <li>
              <span>Help</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterFirst;
