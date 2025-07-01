import React, { useState } from "react";
import AlbumCarousel from "./AlbumCarousel";
import "./AlbumCard.css";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import album1Img from '../img/1.jpg';
import album2Img from '../img/2.jpg';
import album3Img from '../img/3.jpg';


//albumes funcionales

const featuredAlbums = [
    {
        title: "Éxitos Pop",
        author: "Varios Artistas",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        image: album1Img,
        songs: [
            { number: 1, title: "Canción 1", album: "Éxitos Pop", year: 2022, duration: "3:45" },
            { number: 2, title: "Canción 2", album: "Éxitos Pop", year: 2022, duration: "4:10" },
            { number: 3, title: "Canción 3", album: "Éxitos Pop", year: 2022, duration: "2:58" },
        ],
    },
    {
        title: "Rock Clásico",
        author: "Varios Artistas",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        image: album2Img,
        songs: [
            { number: 1, title: "Canción 1", album: "Éxitos Pop", year: 2022, duration: "3:45" },
            { number: 2, title: "Canción 2", album: "Éxitos Pop", year: 2022, duration: "4:10" },
            { number: 3, title: "Canción 3", album: "Éxitos Pop", year: 2022, duration: "2:58" },
        ],
    },
    {
        title: "Lo Mejor del Jazz",
        author: "Varios Artistas",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        image: album3Img,
        songs: [
            { number: 1, title: "Canción 1", album: "Éxitos Pop", year: 2022, duration: "3:45" },
            { number: 2, title: "Canción 2", album: "Éxitos Pop", year: 2022, duration: "4:10" },
            { number: 3, title: "Canción 3", album: "Éxitos Pop", year: 2022, duration: "2:58" },
        ],
    },
];



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
    const navigate = useNavigate();
    const [openAlbum, setOpenAlbum] = useState(null);

    return (
        <div>
            <div className="featured-albums">
                {featuredAlbums.map((album, idx) => (
                    <div
                        key={idx}
                        className="album-card"
                        style={{
                            background: album.gradient,
                            width: openAlbum === idx ? 380 : 180,
                            height: openAlbum === idx ? 260 : 180,
                            position: "relative",
                            display: "flex",
                            flexDirection: openAlbum === idx ? "row" : "column",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                            zIndex: openAlbum === idx ? 10 : 1,
                        }}
                        onClick={() => setOpenAlbum(openAlbum === idx ? null : idx)}
                    >
                        <img
                            src={album.image}
                            alt={album.title}
                            style={{
                                width: openAlbum === idx ? 140 : 80,
                                height: openAlbum === idx ? 140 : 80,
                                borderRadius: 16,
                                marginBottom: openAlbum === idx ? 0 : 12,
                                marginRight: openAlbum === idx ? 24 : 0,
                                objectFit: "cover",
                                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                            }}
                        />
                        <div style={{ textAlign: openAlbum === idx ? "left" : "center" }}>
                            <h3 className="album-title">{album.title}</h3>
                            <p className="album-author">{album.author}</p>
                            {openAlbum === idx && (
                                <>
                                    <p style={{ margin: "0.5rem 0" }}>
                                        <strong>Descripción:</strong> Álbum destacado de {album.author}.
                                    </p>
                                    <p style={{ margin: "0.5rem 0" }}>
                                        <strong>Año:</strong> {album.songs[0].year}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabla de canciones */}
            {openAlbum !== null && (
                <div style={{ margin: "1.5rem auto", maxWidth: 600, background: "#232323", borderRadius: 12, padding: "1rem" }}>
                    <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Canciones disponibles</h4>
                    <table style={{ width: "100%", color: "#fff", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid #444" }}>
                                <th style={{ padding: "0.5rem" }}>#</th>
                                <th style={{ padding: "0.5rem" }}>Título</th>
                                <th style={{ padding: "0.5rem" }}>Álbum</th>
                                <th style={{ padding: "0.5rem" }}>Año</th>
                                <th style={{ padding: "0.5rem" }}>Duración</th>
                            </tr>
                        </thead>
                        <tbody>
                            {featuredAlbums[openAlbum].songs.map((song, i) => (
                                <tr key={i} style={{ borderBottom: "1px solid #333" }}>
                                    <td style={{ padding: "0.5rem", textAlign: "center" }}>{song.number}</td>
                                    <td style={{ padding: "0.5rem" }}>{song.title}</td>
                                    <td style={{ padding: "0.5rem" }}>{song.album}</td>
                                    <td style={{ padding: "0.5rem", textAlign: "center" }}>{song.year}</td>
                                    <td style={{ padding: "0.5rem", textAlign: "center" }}>{song.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Carruseles */}
            <AlbumCarousel title="Top Álbumes" albums={albums1} />
            <AlbumCarousel title="Nuevos Lanzamientos" albums={albums2} />
            <AlbumCarousel title="Recomendados" albums={albums3} />
        </div>
    );
}

export default Home;