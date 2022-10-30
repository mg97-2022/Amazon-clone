import React from "react";
import GeneralLayout from "../../components/GeneralLayout/GeneralLayout";
import { Link } from "react-router-dom";
import classes from "./SuccessPage.module.css";
import Card from "../../components/ui/Card/Card";

function SuccessPage() {
  return (
    <GeneralLayout>
      <Card className={classes.container}>
        <p>Your order has been completed</p>
        <p>Thanks for trusting us</p>
          <Link className="btn" to="/">continue shopping</Link>
      </Card>
    </GeneralLayout>
  );
}

export default SuccessPage;
