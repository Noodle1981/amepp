import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const usuarios = {
    admin: "admin",
    otroUsuario: "admin"
  };

  const autenticar = (usuario, contrasena) => {
    return usuarios[usuario] === contrasena;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (autenticar(usuario, contrasena)) {
      console.log("Autenticación exitosa");
      window.open("/administracion", "_blank"); // Abrir en una nueva ventana
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <img src={assets.logo} alt="Logo" className="logo" />
      <h2>Solo uso de Administración</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
      <p>Si olvidó su usuario o contraseña, contacte con el soporte.</p>
    </div>
  );
};

export default Login;
