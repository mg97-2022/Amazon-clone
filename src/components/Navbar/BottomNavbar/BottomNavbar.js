import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import classes from "./BottomNavbar.module.css";
import { RiCloseFill } from "react-icons/ri";
import Overlay from "../../ui/Overlay/Overlay";
import { fetchedProductsActions } from "../../../store/fetchedProducts";

function BottomNavbar() {
  const fetchedProducts = useSelector(
    (state) => state.fetchedProducts.fetchedProducts
  );
  const [category, setCategory] = useState([]);
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  // get categories of the products
  useEffect(() => {
    const categories = [];
    for (let product of fetchedProducts) {
      const cat = product.category;
      const catExist = categories.findIndex((item) => item === cat);
      if (catExist >= 0) {
        continue;
      } else {
        categories.push(cat);
      }
    }
    setCategory(categories);
  }, [fetchedProducts]);

  // side list handler
  const showListHandler = () => {
    setShowList((prev) => !prev);
  };

  // sorting products
  const sortProductsHandler = (e) => {
    const sortedProducts = e.target.innerText.toLowerCase();
    dispatch(fetchedProductsActions.sortProducts(sortedProducts));
    setShowList(false)
  };

  return (
    <Fragment>
      {showList && <Overlay onClick={showListHandler} />}
      <div className={classes.nav}>
        <div className={classes.content}>
          <RiCloseFill onClick={showListHandler} className={classes.close_btn} style={{
              right: showList ? "10px" : "-500px",
            }} />
          <ul
            style={{
              right: showList ? "0" : "-500px",
            }}
          >
            <li onClick={sortProductsHandler}>
              <button>all</button>
            </li>
            {category.map((cate, i) => {
              return (
                <li key={i} onClick={sortProductsHandler}>
                  <button>{cate}</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={showListHandler} className={classes.bars}>
          <FaBars />
        </div>
      </div>
    </Fragment>
  );
}

export default BottomNavbar;
