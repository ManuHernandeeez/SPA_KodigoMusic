import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Compañía</h4>
          <ul>
            <li>Acerca de</li>
            <li>Empleos</li>
            <li>Prensa</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ayuda</h4>
          <ul>
            <li>Soporte</li>
            <li>Centro de ayuda</li>
            <li>Contacto</li>
            <li>Reportar un problema</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Términos de uso</li>
            <li>Privacidad</li>
            <li>Cookies</li>
            <li>Licencias</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Kodigo Music &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;