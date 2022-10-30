import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/ui/Loading/Loading";
import useHttp from "../../../hooks/use-http";
import { fetchedProductsActions } from "../../../store/fetchedProducts";
import { searchBarActions } from "../../../store/searchBar";
import Item from "./Item/Item";
import classes from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const fetchedItems = useSelector(
    (state) => state.fetchedProducts.fetchedProducts
  );
  const sortProducts = useSelector(
    (state) => state.fetchedProducts.sortProducts
  );
  const searchBarValue = useSelector((state) => state.searchBar.enteredValue);
  const { error, isLoading, sendRequest } = useHttp();

  // function to handle fetched products
  const handleProducts = useCallback(
    (data) => {
      const fetchedProducts = [];
      for (const product of data.products) {
        fetchedProducts.push({
          ...product,
          img: product.thumbnail,
        });
      }
      dispatch(fetchedProductsActions.fetchProducts(fetchedProducts));
    },
    [dispatch]
  );

  // send request to fetch products data
  useEffect(() => {
    sendRequest(
      {
        url: "https://dummyjson.com/products/",
      },
      handleProducts
    );
  }, [sendRequest, handleProducts]);

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

  // reset filtered products when navigating to another page
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
      <div className={classes.error}>
        <p>something went wrong!</p>
        <p>please try again</p>
      </div>
    );
  } else if (!isLoading && !error) {
    output = (
      <div className={`container ${classes.products}`}>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    );
  }

  return <Fragment>{output}</Fragment>;
}

export default Products;
