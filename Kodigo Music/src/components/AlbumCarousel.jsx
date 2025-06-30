import React from "react";
import AlbumCard from "./AlbumCard";
import "./AlbumCarousel.css";

function AlbumCarousel({ title, albums }) {
  return (
    <div className="album-carousel">
      <h2 className="carousel-title">{title}</h2>
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