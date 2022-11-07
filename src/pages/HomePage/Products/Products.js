import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/ui/Loading/Loading";
import useHttp from "../../../hooks/use-http";
import { fetchedProductsActions } from "../../../store/fetchedProducts";
import { searchBarActions } from "../../../store/searchBar";
import Item from "./Item/Item";
import classes from "./Products.module.css";

function Products() {
  const fetchedItems = useSelector(
    (state) => state.fetchedProducts.fetchedProducts
  );
  const [products, setProducts] = useState(fetchedItems);
  const dispatch = useDispatch();

  const sortProducts = useSelector(
    (state) => state.fetchedProducts.sortProducts
  );
  const searchBarValue = useSelector((state) => state.searchBar.enteredValue);
  const { error, isLoading, sendRequest } = useHttp();

  // send request to fetch products data
  useEffect(() => {
    (async () => {
      const data = await sendRequest({
        url: "https://dummyjson.com/products/",
      });
      const fetchedProducts = [];
      for (const product of data.products) {
        fetchedProducts.push({
          ...product,
          img: product.thumbnail,
        });
      }
      dispatch(fetchedProductsActions.fetchProducts(fetchedProducts));
    })();
  }, [sendRequest, dispatch]);

  // sort products according to category
  useEffect(() => {
    if (sortProducts === "all") {
      setProducts(fetchedItems);
    } else {
      const newProducts = fetchedItems.filter(
        (item) => item.category === sortProducts
      );
      setProducts(newProducts);
    }
  }, [setProducts, fetchedItems, sortProducts, dispatch]);

  // filter products according to search bar value
  useEffect(() => {
    if (!searchBarValue.match(/[a-z]/gi)) {
      setProducts(fetchedItems);
    }
    if (!searchBarValue.match(/[a-z]/gi)) {
      return;
    }
    if (searchBarValue === "") {
      setProducts(fetchedItems);
    } else {
      const regex = new RegExp(searchBarValue, "gi");
      const newProducts = fetchedItems.filter((item) =>
        item.title.match(regex)
      );
      setProducts(newProducts);
    }
  }, [setProducts, searchBarValue, fetchedItems]);

  // reset filtered products when page loads
  useEffect(() => {
    dispatch(searchBarActions.getEnteredValue(""));
  }, [dispatch]);

  // output under certain conditions (loading error success)
  let output;
  if (isLoading && !error) {
    output = (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  } else if (!!error) {
    output = (
      <div className={classes.text_content}>
        <p>something went wrong!</p>
        <p>please try again</p>
      </div>
    );
  } else if (!isLoading && !error && products.length !== 0) {
    output = (
      <div className={`container ${classes.products}`}>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    );
  } else if (!isLoading && !error && products.length === 0) {
    output = (
      <div className={classes.text_content}>
        <p>found no products?</p>
        <p>enter something else</p>
      </div>
    );
  }

  return <Fragment>{output}</Fragment>;
}

export default Products;
