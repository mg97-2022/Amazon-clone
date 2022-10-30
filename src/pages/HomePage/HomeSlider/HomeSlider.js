import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./HomeSlider.module.css";

function HomeSlider() {
  return (
    <div className={`container ${classes.slider}`}>
      <div className={classes.overlay} />
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeSlider;
