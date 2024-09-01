import React, { useState, useEffect } from "react";
import "./pizza.css"
export default function Pizza() {
    const [pizza, setPizza] = useState(null);

    const tomarPizza = async () => {

        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
        console.log(setPizza)
      } 
  
    useEffect(() => {
      tomarPizza();
    }, []);
    if (!pizza) {
        return <div>Cargando...</div>;
    }
  return (
    <div className="container">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(", ")}</p>
      <p>{pizza.description}</p>
      <button className="boton">Añadir al carrito</button>
    </div>
  );
}
