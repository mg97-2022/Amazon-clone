import React, { useState } from "react";
import { useSelector } from "react-redux";
import ImagesPart from "./ImagesPart/ImagesPart";
import PurchasePart from "./PurchasePart/PurchasePart";
import InfoPart from "./InfoPart/InfoPart";
import classes from "./ProductDetails.module.css";

function ProductDetails() {
  const productDetails = useSelector(
    (state) => state.productDetails.productDetails
  );

  const {
    discountPercentage,
    randomNumOfStars,
    id,
    brand,
    category,
    rating,
    stock,
    title,
    description,
    price,
    img,
    images,
  } = productDetails;



  return (
    <div className={`container ${classes.product}`}>
      <ImagesPart images={images} />
      <InfoPart details={productDetails} />
      <PurchasePart product={productDetails} />
    </div>
  );
}

export default ProductDetails;
