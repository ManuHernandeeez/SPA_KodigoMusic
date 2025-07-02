import React from "react";

function Player() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem 120px 1rem",
        position: "relative",
        background: "#181818",
        margin: "2.5rem auto",
        borderRadius: 18,
        boxSizing: "border-box",
        boxShadow: "0 2px 24px #0005",
      }}
    >
      <img
        src="/src/img/1.jpg"
        alt="Portada"
        style={{
          width: "60vw",
          maxWidth: 180,
          height: "auto",
          aspectRatio: "1/1",
          borderRadius: 16,
          objectFit: "cover",
          marginBottom: 24,
          boxShadow: "0 2px 16px #0006",
        }}
      />
      <div style={{ color: "#fff", fontSize: "1.3rem", fontWeight: "bold", marginBottom: 8, textAlign: "center" }}>
        Easy on Me
      </div>
      <div style={{ color: "#43e97b", fontSize: "1.05rem", marginBottom: 18, textAlign: "center" }}>
        Adele
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: 320,
          height: 8,
          background: "#333",
          borderRadius: 5,
          marginBottom: 16,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "100%",
            background: "linear-gradient(90deg, #646cff 0%, #43e97b 100%)",
          }}
        ></div>
      </div>
      <div style={{ color: "#fff", opacity: 0.7, fontSize: "1.05rem", marginBottom: 24 }}>
        01:12 / 3:44
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 24 }}>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            cursor: "pointer",
            padding: "0 10px",
          }}
          title="Anterior"
        >
          ⏮️
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#646cff",
            fontSize: "2.5rem",
            cursor: "pointer",
            padding: "0 10px",
          }}
          title="Reproducir/Pausar"
        >
          ▶️
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            cursor: "pointer",
            padding: "0 10px",
          }}
          title="Siguiente"
        >
          ⏭️
        </button>
      </div>
      {/* Barra inferior fija */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          background: "#232323",
          color: "#fff",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          zIndex: 100,
          letterSpacing: 1,
        }}
      >
        <span style={{ fontWeight: 500, textAlign: "center" }}>Reproduciendo: Easy on Me - Adele</span>
      </div>
    </div>
  );
}

export default Player;