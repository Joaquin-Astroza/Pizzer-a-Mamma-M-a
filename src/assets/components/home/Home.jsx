
import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import CardPizza from "../cardpizza/CardPizza";
import "../home/home.css";

export default function Home() {
  const [pizzas, setPizzas]= useState([])

  const obtenerinformacion = async () =>{
    const res = await fetch("http://localhost:5000/api/pizzas")
    const data = await res.json()
    setPizzas(data)
   }
   useEffect(()=>{
    obtenerinformacion()
     },[])
  return (
    <div>
      <Header />
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}
