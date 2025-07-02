import React from 'react';

const aboutStyle = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '32px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  color: '#222',
};

const headingStyle = {
  fontSize: '2.2rem',
  marginBottom: '18px',
  color: '#1db954',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.7',
};

function About() {
  return (
    <div className="about" style={aboutStyle}>
      <h1 style={headingStyle}>Acerca de Kodigo Music</h1>
      <p style={paragraphStyle}>
        Kodigo Music es una aplicación web de una sola página inspirada en las principales plataformas de música digital. Permite explorar álbumes y ver detalles de canciones de forma sencilla y atractiva.
      </p>
    </div>
  );
}

export default About;
