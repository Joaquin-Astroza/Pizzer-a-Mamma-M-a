import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
      } else {
        throw new Error(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error con Login:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error al registrar");
      }
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error con Registro:", error);
      throw error;
    }
  };

  const logout = () => {
    console.log("logout ejecutado");
    setToken(null);
    setEmail("");
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    const tokenusuario = localStorage.getItem("token");

    if (!tokenusuario) {
      console.error("No hay token disponible");
      return null;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenusuario}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener el perfil");
      }
      const data = await response.json();
      setUser(data);
      setEmail(data.email);
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
