
import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/header/Header";
import CardPizza from "../../components/cardpizza/CardPizza";
import { CartContext } from "../../context/CartContext";
import "./home.css";

export default function Home() {
  const [pizzas, setPizzas]= useState([])
  const {addCart} = useContext(CartContext);

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
            <CardPizza pizza={pizza} onAddCart={()=> addCart(pizza)}/>
          </div>
        ))}
      </div>
    </div>
  );
}
