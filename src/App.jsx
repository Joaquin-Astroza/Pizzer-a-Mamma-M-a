import React from "react";
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/pages/home/Home";
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
import RegisterPage from "./assets/pages/register/RegisterPage";
import LoginPage from "./assets/pages/register/LoginPage";
import Cart from "./assets/pages/cart/Cart";
import Pizza from "./assets/pages/pizza/Pizza";
import NotFound from "./assets/pages/notfound/NotFound";
import Profile from "./assets/pages/profile/Profile";
import { Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./assets/context/CartContext";
library.add(faUser, faShoppingCart, faLock, faUnlock, faPizzaSlice, faEye);


function App() {
  
  return (
    <CartContextProvider>
    <Navbar/>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer/>

    </CartContextProvider>


  );
}
export default App;
