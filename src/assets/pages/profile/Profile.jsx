import React, { useContext } from "react";
import "./profile.css"
import { UserContext } from "../../context/UserContext";

export default function Profile() {
  const email = "user@example.com";
  const {token, logout}= useContext(UserContext)


  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <button className="boton" onClick={logout}>Logout</button>
    </div>
  );
}
