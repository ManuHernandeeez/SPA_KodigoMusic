import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/appConfig";
import './Navbar.css';
import React from 'react';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Kodigo Music</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Inicio</Link>
        </li>
       
        <li>
          <Link to="/library">Librería</Link>
        </li>
        <li>
          <Link to="/favorites">Me gusta</Link>
        </li>
         <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
      <div className="navbar-logout">
        <button onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;