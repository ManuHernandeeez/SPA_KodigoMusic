import React from "react";
import AlbumCarousel from "./AlbumCarousel";

const albums1 = [
  { title: "Aurora", author: "Luna", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)" },
  { title: "Sunset", author: "Sol", gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
  { title: "Ocean", author: "Mar", gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
  { title: "Forest", author: "Bosque", gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" },
  { title: "Night", author: "Noche", gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
  { title: "Fire", author: "Fuego", gradient: "linear-gradient(135deg, #fbc2eb 0%, #fcb69f 100%)" },
];

const albums2 = [
  { title: "Dreams", author: "Sueños", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
  { title: "Sky", author: "Cielo", gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { title: "Mountain", author: "Montaña", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
  { title: "River", author: "Río", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
  { title: "Desert", author: "Desierto", gradient: "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)" },
  { title: "Rain", author: "Lluvia", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
];

const albums3 = [
  { title: "Galaxy", author: "Galaxia", gradient: "linear-gradient(135deg, #a770ef 0%, #f6d365 100%)" },
  { title: "Wind", author: "Viento", gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" },
  { title: "Thunder", author: "Trueno", gradient: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)" },
  { title: "Flower", author: "Flor", gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)" },
  { title: "Ice", author: "Hielo", gradient: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" },
  { title: "Sand", author: "Arena", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
];

function Home() {
  return (
    <div>
      <AlbumCarousel title="Top Álbumes" albums={albums1} />
      <AlbumCarousel title="Nuevos Lanzamientos" albums={albums2} />
      <AlbumCarousel title="Recomendados" albums={albums3} />
    </div>
  );
}

export default Home;