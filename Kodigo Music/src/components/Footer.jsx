import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Kodigo Music &copy; {new Date().getFullYear()}</span>
        <span>
          Hecho con <span style={{color: "#646cff"}}>a</span> por tu equipo Kodigo
        </span>
      </div>
    </footer>
  );
}

export default Footer;