import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Inicio</Link>
        </li>

        <li
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          <Link to="/Join">Afiliarse</Link>
        </li>

        <li
          onClick={() => setMenu("News")}
          className={menu === "News" ? "active" : ""}
        >
          <Link to="/News">Noticias</Link>
        </li>

        <li
          onClick={() => setMenu("Benefits")}
          className={menu === "Benefits" ? "active" : ""}
        >
          <Link to="/Benefits">Beneficios</Link>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <span>Servicios</span>
          <ul className="dropdown-content">
            <li
              onClick={() => setMenu("Health")}
              className={menu === "Health" ? "active" : ""}
            >
              <Link to="/Health">Salud</Link>
            </li>
            <li
              onClick={() => setMenu("Workshops")}
              className={menu === "Workshops" ? "active" : ""}
            >
              <Link to="/Workshops">Talleres</Link>
            </li>
            <li
              onClick={() => setMenu("Trips")}
              className={menu === "Trips" ? "active" : ""}
            >
              <Link to="/Trips">Viajes</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Link to="/Login">
      <button>Iniciar Sesión</button>
      </Link>
    </div>
  );
};

export default Navbar;
