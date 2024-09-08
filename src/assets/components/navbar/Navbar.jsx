import React, { useContext } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faLock,
  faUnlock,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const {precioTotal,cantidadtotal} = useContext(CartContext);
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">Pizzería Mamma Mía</a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <button className="nav-link active nav-btn" aria-current="page">
                  <Link to="/">
                    <FontAwesomeIcon icon={faPizzaSlice} className="icono" />
                    Home
                  </Link>
                </button>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                      <li>
                        <Link to="/profile">
                          <FontAwesomeIcon icon={faUnlock} className="icono" />
                          Profile
                        </Link>
                      </li>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                      <FontAwesomeIcon icon={faLock} className="icono" />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <button className="nav-link nav-btn">
                      <Link to="/login">
                        <FontAwesomeIcon icon={faLock} className="icono" />
                        Login
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                      <Link to="/register">
                        <FontAwesomeIcon icon={faLock} className="icono" />
                        Register
                      </Link>
                    </button>
                  </li>
                </>
              )}
            </ul>
            <span className="navbar-text">
              <div>
                <li className="nav-item total">
                  <button className=" nav-link totalCarrito">
                    <Link to="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} /> Total: $
                      {precioTotal.toLocaleString()} ({cantidadtotal})
                    </Link>
                  </button>
                </li>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
