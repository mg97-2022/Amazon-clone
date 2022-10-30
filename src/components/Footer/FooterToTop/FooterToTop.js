import React from "react";
import classes from "./FooterToTop.module.css";

function FooterToTop() {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={scrollToTopHandler} className={classes.to_top}>
      Back to top
    </button>
  );
}

export default FooterToTop;
