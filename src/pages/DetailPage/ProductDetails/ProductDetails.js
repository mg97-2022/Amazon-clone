import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImagesPart from "./ImagesPart/ImagesPart";
import PurchasePart from "./PurchasePart/PurchasePart";
import InfoPart from "./InfoPart/InfoPart";
import classes from "./ProductDetails.module.css";
import { useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { useParams } from "react-router-dom";
import { productDetailsActions } from "../../../store/productDetails";
import LoadingPage from "../../LoadingPage/LoadingPage";

function ProductDetails() {
  const product = useSelector((state) => state.productDetails.productDetails);
  const dispatch = useDispatch();
  const [randomNumOfStars] = useState(Math.floor(Math.random() * 5 + 1));
  const { product_details } = useParams();
  const { sendRequest, error, isLoading } = useHttp();
  useEffect(() => {
    (async () => {
      const data = await sendRequest({
        url: `https://dummyjson.com/products/${product_details}`,
      });

      dispatch(
        productDetailsActions.getProductDetails({
          ...data,
          randomNumOfStars,
        })
      );
    })();
  }, [dispatch, product_details, sendRequest, randomNumOfStars]);

  if (isLoading && !error) {
    return <LoadingPage />;
  }

  if (Object.keys(product).length === 0) {
    return;
  }

  return (
    <div className={`container ${classes.product}`}>
      <ImagesPart images={product.images} />
      <InfoPart details={product} />
      <PurchasePart product={product} />
    </div>
  );
}

export default ProductDetails;
