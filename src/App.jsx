import React from "react";
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/components/home/Home";
import Navbar from "./assets/components/navbar/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faShoppingCart,
  faLock,
  faUnlock,
  faPizzaSlice,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState } from "react";
import RegisterPage from "./assets/components/register/RegisterPage";
import LoginPage from "./assets/components/register/LoginPage";
import Cart from "./assets/components/cart/Cart";
library.add(faUser, faShoppingCart, faLock, faUnlock, faPizzaSlice, faEye);

function App() {
  return (
    <div>
      <Navbar />
      {/*<Home /> */}
      {/* <RegisterPage /> */}
      {/*<LoginPage/> */}
      <Cart />
      <Footer />
    </div>
  );
}
export default App;
