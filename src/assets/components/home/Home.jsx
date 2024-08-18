import {useState} from "react";
import Header from "../header/Header";
import CardPizza from "../cardpizza/CardPizza";
import pizzas from "./pizza.json"
import "../home/home.css"

export default function Home() {
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