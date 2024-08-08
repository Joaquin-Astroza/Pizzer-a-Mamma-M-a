import React from "react";
import "../cardpizza/cardpizza.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
export default function CardPizza(props) {
  return (
    <div className="container">
      <div className="row  card">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush ingredientes">
          <h6>Ingredientes:</h6>
          <p className="card-text">
            <small>
              <FontAwesomeIcon icon={faPizzaSlice} className="icono" />
              {props.ingredients.join(", ")}
            </small>
          </p>
        </ul>
        <div className="card-body">
          <li className="list-group-item">Precio: ${props.price}</li>
          <br />
          <div className="botones-tarjetas">
            <button className="card-link ver-mas">
              {" "}
              <FontAwesomeIcon icon={faEye} className="icono" />
              Ver más{" "}
            </button>
            <button className="card-link añadir">
              <FontAwesomeIcon icon={faShoppingCart} className="icono" /> Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
