import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/appConfig";
import { Link } from "react-router-dom";
import "./AuthForm.css";

import Swal from 'sweetalert2'


function Register() {
  // guarda el email del usuario
  const [email, setEmail] = useState("");
  // guarda la contraseña
  const [password, setPassword] = useState("");
  // mensajes de error
  const [error, setError] = useState("");
  //mensajes de éxito
  const [success, setSuccess] = useState("");

  //gestion del registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form-container">
      <h2>Registro</h2>
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
      <button type="submit">Registrarse</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </form>
  );
}

export default Register;