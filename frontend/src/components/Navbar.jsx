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
                <li className={menu === "services" ? "active" : ""}>
                    <span>Servicios</span>
                    <ul className="dropdown-content">
                        <li
                            onClick={() => setMenu("Pharmacy")}
                            className={menu === "Pharmacy" ? "active" : ""}
                        >
                            <Link to="/Pharmacy">Farmacias</Link>
                        </li>
                        <li
                            onClick={() => setMenu("Optics")}
                            className={menu === "Optics" ? "active" : ""}
                        >
                            <Link to="/Optics">Ópticas</Link>
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
                <li
                    onClick={() => setMenu("News")}
                    className={menu === "News" ? "active" : ""}
                >
                    <Link to="/News">Noticias</Link>
                </li>
                <li
                    onClick={() => setMenu("Contact")}
                    className={menu === "Contact" ? "active" : ""}
                >
                    <Link to="/Contact">Contacto</Link>
                </li>
            </ul>
            <button>Iniciar Sesión</button>
        </div>
    );
};

export default Navbar;

