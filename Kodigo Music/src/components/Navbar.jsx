// Componente Navbar: barra de navegación principal de la aplicación.
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    // Estructura de la barra de navegación con enlaces a las rutas principales.
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Kodigo Music</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/music-form">Agregar Música</Link>
        </li>
        <li>
          <Link to="/library">Librería</Link>
        </li>
        <li>
          <Link to="/favorites">Me gusta</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;