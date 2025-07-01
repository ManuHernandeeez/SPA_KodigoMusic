// Componente AlbumCarousel: muestra un carrusel horizontal de álbumes.
import React from "react";
import AlbumCard from "./AlbumCard";
import "./AlbumCarousel.css";

function AlbumCarousel({ title, albums }) {
  return (
    <div className="album-carousel">
      {/* Título del carrusel */}
      <h2 className="carousel-title">{title}</h2>
      {/* Lista de álbumes */}
      <div className="carousel-list">
        {albums.map((album, idx) => (
          <AlbumCard
            key={idx}
            title={album.title}
            author={album.author}
            gradient={album.gradient}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumCarousel;