// Componente AlbumCarousel: muestra un carrusel horizontal de álbumes.
import React, { useRef } from "react";
import AlbumCard from "./AlbumCard";
import "./AlbumCarousel.css";

function AlbumCarousel({ title, albums }) {
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Drag-scroll handlers
  const handleMouseDown = (e) => {
    isDown = true;
    carouselRef.current.classList.add('dragging');
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    carouselRef.current.classList.remove('dragging');
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove('dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidad
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events para móviles
  const handleTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDown = false;
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="album-carousel">
      <h2 className="carousel-title">{title}</h2>
      <div
        className="carousel-list"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{ cursor: "grab" }}
      >
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