import React from "react";

const favoriteSongs = [
  {
    title: "Easy on Me",
    artist: "Adele",
    album: "30",
    year: 2021,
    duration: "3:44",
  },
  {
    title: "The Less I Know the Better",
    artist: "Tame Impala",
    album: "Currents",
    year: 2015,
    duration: "3:36",
  },
  {
    title: "Inolvidable",
    artist: "Luis Miguel",
    album: "Romance",
    year: 1991,
    duration: "4:38",
  },
];

function Favorites() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2.5rem auto",
        borderRadius: 28,
        padding: "2.5rem 2rem",
        background: "linear-gradient(135deg, #646cff 0%, #43e97b 100%)",
        boxShadow: "0 8px 40px #0008",
        color: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", letterSpacing: 1 }}>
        <span role="img" aria-label="heart"></span> Tus Canciones Favoritas
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {favoriteSongs.map((song, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(35,35,35,0.85)",
              borderRadius: 16,
              marginBottom: "1.2rem",
              padding: "1rem 1.2rem",
              boxShadow: "0 2px 12px #0004",
              transition: "transform 0.15s",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.3rem",
                marginRight: "1.2rem",
                color: "#fff",
                boxShadow: "0 2px 8px #0003",
              }}
            >
              {idx + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                {song.title}
                <span style={{ marginLeft: 8, fontSize: "1rem", color: "#43e97b" }}>♥</span>
              </div>
              <div style={{ fontSize: "0.97rem", opacity: 0.85 }}>
                {song.artist} &middot; <span style={{ color: "#646cff" }}>{song.album}</span> ({song.year})
              </div>
            </div>
            <div style={{ fontWeight: 500, fontSize: "1rem", marginLeft: 16 }}>
              {song.duration}
            </div>
          </li>
        ))}
      </ul>
      {favoriteSongs.length === 0 && (
        <p style={{ textAlign: "center", opacity: 0.8, marginTop: "2rem" }}>
          ¡Aún no tienes canciones favoritas! <span role="img" aria-label="music">🎶</span>
        </p>
      )}
    </div>
  );
}

export default Favorites;