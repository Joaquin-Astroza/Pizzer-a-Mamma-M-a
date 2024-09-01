import React, {useState} from "react";
import "./loginpage.css"

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    setMessage("Registro exitoso!");
    console.log({ email, password });
  };
  return (
    <div className="main">
      <h1 className="titulo">Registrar</h1>
      <div className="contenedor">
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
