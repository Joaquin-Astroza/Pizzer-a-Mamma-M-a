import React, { useContext, useState } from "react";
import pizzas from "../home/pizza.json";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
const { cartItems, addCart, removeCart, precioTotal, cantidadtotal} = useContext(CartContext)

  return (
    <div>
      <h2>Lista de productos</h2>
      <h3>Cantidad de productos: {cantidadtotal}</h3>
      <h3>cantidad a pagar: {precioTotal}</h3>
      <div className="p3">
        {pizzas.map((pizza) => (
          <div className="d-flex" key={pizza.id}>
            <div>
              <img src={pizza.img} className="w-25" alt={pizza.name} />
              <p>{pizza.name}</p>
              <p>{pizza.desc}</p>
              <p>{pizza.ingredients.join(", ")}</p>
              <p>{pizza.price}</p>
              <p>{pizza.quantity}</p>
            </div>
            <div>
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
    </div>
  );
}

