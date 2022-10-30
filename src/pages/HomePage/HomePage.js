import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./HomePage.module.css";
import Products from "./Products/Products";
import HomeSlider from "./HomeSlider/HomeSlider";

function HomePage() {
  return (
    <div className={classes.homepage}>
      <Navbar home={true} />
      <HomeSlider />
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
