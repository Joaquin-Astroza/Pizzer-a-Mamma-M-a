import React, { useContext, useState } from "react";
import pizzas from "../home/pizza.json";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import "./cart.css"

export default function Cart() {
const { cartItems, addCart, removeCart, precioTotal, cantidadtotal} = useContext(CartContext)
const {token} = useContext(UserContext)

  return (
    <div className="container cart-container">
      <h2>Lista de productos</h2>
      <h3 className="cart-info">Cantidad de productos: {cantidadtotal}</h3>
      <h3 className="cart-info">cantidad a pagar: {precioTotal}</h3>
      <div className="p3">
        {pizzas.map((pizza) => (
          <div className="card" key={pizza.id}>
            <div>
              <img src={pizza.img} className="w-25" alt={pizza.name} />
              <p>{pizza.name}</p>
              <p>{pizza.desc}</p>
              <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
              <p>{pizza.price}</p>
              <p>{pizza.quantity}</p>
            </div>
            <div className="card-buttons">
              <button className="btn btn-success" onClick={() => addCart(pizza)}>
                +
              </button>
              <button className="btn btn-danger" onClick={() => removeCart(pizza)}>
                -
              </button>
            </div>
          </div>
        ))}

      </div>
      <button className="btn btn-primary" disabled={!token}>
        Pagar
      </button>
      {"  "}

      {!token && <p>Debes iniciar sesión para proceder con el pago.</p>}
    </div>
  );
}

