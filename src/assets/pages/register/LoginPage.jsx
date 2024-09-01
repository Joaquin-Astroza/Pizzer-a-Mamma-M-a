import React, { useState } from "react";
import "./loginpage.css";

export default function LoginPage() {
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !contraseña) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (contraseña.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    console.log("Contraseña: ", contraseña);
    console.log("Email: ", email);
    alert("Enviado con exito!");}

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleContraseñaChange = (event) => {
        setContraseña(event.target.value);
  };

  return (
    <div className="main">
      <h1 className="titulo">Login</h1>
      <div className="contenedor">
        <form className="formulario" onSubmit={handleSubmit}> 
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
          <br />
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="text"
            id="contraseña"
            name="contraseña"
            value={contraseña}
            required
            onChange={handleContraseñaChange}
          />
          <br />
          <button type="submit">
            Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
