import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { searchBarActions } from "../../../../store/searchBar";
import classes from "./SearchBar.module.css";

function SearchBar() {
  const [enteredValue, setEnteredValue] = useState("");
  const dispatch = useDispatch();

  const inputValueHandler = (e) => {
    setEnteredValue(e.target.value);
    dispatch(searchBarActions.getEnteredValue(e.target.value));
  };

  return (
    <div className={classes.search}>
      <input onChange={inputValueHandler} type="text" value={enteredValue} />
      <AiOutlineSearch />
    </div>
  );
}

export default SearchBar;
