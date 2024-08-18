import React, { useState } from "react";
import pizzas from "../home/pizza.json";

export default function Cart() {
  const [carrito, setCarrito] = useState([]);
  let total= carrito.reduce((acumulador,pizza)=> acumulador += pizza.count ,0)
    let totalaPagar=carrito.reduce((acumulador,pizza)=>acumulador += (pizza.price * pizza.count),0)
  const agregar = (pizza) => {
    let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
    let nuevo_producto = {
      id: pizza.id,
      name: pizza.name,
      desc: pizza.desc,
      ingredients: pizza.ingredients,
      price: pizza.price,
      count: 1,
    };

    if (coincidencia >= 0) {
      carrito[coincidencia].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, nuevo_producto]);
    } 
  };

  const desagregar = (pizza) => {
    let coincidencia = carrito.findIndex((item) => item.id === pizza.id);
  
    if (coincidencia >= 0) {
      if (carrito[coincidencia].count > 1) {
        carrito[coincidencia].count--;
      } else {
        setCarrito(carrito.filter((item) => item.id !== pizza.id));
      }
    }
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <h3>Cantidad de productos: {total}</h3>
      <h3>cantidad a pagar: {totalaPagar}</h3>
      <div className="p3">
        {pizzas.map((pizza) => (
          <div className="d-flex" key={pizza.id}>
            <div>
              <img src={pizza.img} className="w-25" alt={pizza.name} />
              <p>{pizza.name}</p>
              <p>{pizza.desc}</p>
              <p>{pizza.ingredients.join(", ")}</p>
              <p>{pizza.price}</p>
            </div>
            <div>
              <button className="btn btn-success" onClick={() => agregar(pizza)}>
                +
              </button>
              <button className="btn btn-danger" onClick={() => desagregar(pizza)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

