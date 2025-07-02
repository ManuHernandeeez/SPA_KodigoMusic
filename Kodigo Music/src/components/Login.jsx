import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/appConfig";
import { useNavigate, Link } from "react-router-dom";
import "./AuthForm.css";
import Swal from "sweetalert2";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //promesa
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Sesion iniciada!",
        icon: "success",
        draggable: true
      }).then(() => {
        navigate("/home");
      });
    } catch (err) {
      setError("Correo o contraseña incorrectos");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Correo o contraseña incorrectos",
        footer: '<a href="#">¿Olvidaste tu contraseña?</a>'
      });
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form-container">
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
      {error && <p className="error">{error}</p>}
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </form>
  );
}

export default Login;