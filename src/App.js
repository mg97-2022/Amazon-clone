import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
// import CartPage from "./pages/CartPage/CartPage";
// import DetailPage from "./pages/DetailPage/DetailPage";
// import HomePage from "./pages/HomePage/HomePage";
// import SigninPage from "./pages/SigninPage/SigninPage";
// import SignupPage from "./pages/SignupPage/SignupPage";
// import EmailExistPage from "./pages/SignupPage/EmailExistPage/EmailExistPage";
// import SuccessPage from "./pages/SuccessPage/SuccessPage";
// import OrdersPage from "./pages/OrdersPage/OrdersPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signMessageActions } from "./store/signMessage";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const CartPage = React.lazy(() => import("./pages/CartPage/CartPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage/DetailPage"));
const SigninPage = React.lazy(() => import("./pages/SigninPage/SigninPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage/SignupPage"));
const EmailExistPage = React.lazy(() =>
  import("./pages/SignupPage/EmailExistPage/EmailExistPage")
);
const SuccessPage = React.lazy(() => import("./pages/SuccessPage/SuccessPage"));
const OrdersPage = React.lazy(() => import("./pages/OrdersPage/OrdersPage"));

export let firstLoad = true;

function App() {
  // show sign message when the website loads first time
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        dispatch(signMessageActions.hideMessage());
        firstLoad = false;
      }, 8000);
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup">
          <Route index element={<SignupPage />} />
          <Route path="error" element={<EmailExistPage />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:product_details" element={<DetailPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
