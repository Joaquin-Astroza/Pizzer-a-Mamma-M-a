import React from "react";
import "../navbar/navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser, faShoppingCart, faLock, faUnlock, faPizzaSlice} from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" >
            Pizzería Mamma Mía
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto ">
              <li class="nav-item">
                <button class="nav-link active nav-btn" aria-current="page" >
                <FontAwesomeIcon icon={faPizzaSlice} className="icono"/>
                 Home
                </button>

              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                    <FontAwesomeIcon icon={faUnlock} className="icono"/>
                      Profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                    <FontAwesomeIcon icon={faLock} className="icono"/>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <button className="nav-link nav-btn">
                    <FontAwesomeIcon icon={faLock} className="icono" />
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link nav-btn">
                    <FontAwesomeIcon icon={faLock}className="icono" />
                      Register
                    </button>
                  </li>
                </>
              )}
              
            </ul>
            <span class="navbar-text">
              <div>
                <li className="nav-item total">
                  <button className=" nav-link totalCarrito">
                  <FontAwesomeIcon icon={faShoppingCart} /> Total: $
                  {total.toLocaleString()}
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
