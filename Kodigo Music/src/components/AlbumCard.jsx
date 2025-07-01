// Componente AlbumCard: representa visualmente un álbum individual.
import React from "react";
import "./AlbumCard.css";

function AlbumCard({ title, author, gradient }) {
  return (
    // Tarjeta con información del album
    <div
      className="album-card"
      style={{
        background: gradient,
      }}
    >
      <div className="album-info">
        <h3 className="album-title">{title}</h3>
        <p className="album-author">{author}</p>
      </div>
    </div>
  );
}

export default AlbumCard;