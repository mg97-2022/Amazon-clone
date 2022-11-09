import React from "react";
import Loading from "../../components/ui/Loading/Loading";
import classes from "./LoadingPage.module.css";

function LoadingPage() {
  return (
    <div className={classes.loading_page}>
      <Loading />
    </div>
  );
}

export default LoadingPage;
