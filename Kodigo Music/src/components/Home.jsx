// Este componente representa la página principal de la aplicación, mostrando álbumes destacados, tablas de canciones y carruseles de álbumes.
import React, { useState } from "react";
import AlbumCarousel from "./AlbumCarousel";
import "./AlbumCard.css";
import "./Home.css";
import album1Img from '../img/1.jpg';
import album2Img from '../img/2.jpg';
import album3Img from '../img/3.jpg';
import { useNavigate } from "react-router-dom";

// Albumes funcionales
const featuredAlbums = [
    {
        id: 0,
        title: "25",
        author: "Adele",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        image: album1Img,
        songs: [
            { number: 1, title: "Hello", album: "25", year: 2015, duration: "4:55" },
            { number: 2, title: "When We Were Young", album: "25", year: 2015, duration: "4:50" },
            { number: 3, title: "Send My Love (To Your New Lover)", album: "25", year: 2015, duration: "3:43" }
        ]
        ,
    },
    {
        id: 1,
        title: "The Slow Rush",
        author: "Tame Impala",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
        image: album2Img,
        songs: [
            { number: 1, title: "One More Year", album: "The Slow Rush", year: 2020, duration: "5:24" },
            { number: 2, title: "Borderline", album: "The Slow Rush", year: 2020, duration: "4:34" },
            { number: 3, title: "Lost in Yesterday", album: "The Slow Rush", year: 2020, duration: "4:09" }
        ],
    },
    {
        id: 2,
        title: "Segundo Romance",
        author: "Luis Miguel",
        gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        image: album3Img,
        songs: [
            { number: 1, title: "El Día Que Me Quieras", album: "Segundo Romance", year: 1994, duration: "4:19" },
            { number: 2, title: "Sin Ti", album: "Segundo Romance", year: 1994, duration: "3:04" },
            { number: 3, title: "Somos Novios", album: "Segundo Romance", year: 1994, duration: "3:10" }
        ]
        ,
    },
];

// Exportamos listas completas de canciones para cada álbum.
export const fullAlbumSongs = [
    [
        { number: 1, title: "Strangers by Nature", album: "30", year: 2021, duration: "3:02" },
        { number: 2, title: "Easy on Me", album: "30", year: 2021, duration: "3:44" },
        { number: 3, title: "My Little Love", album: "30", year: 2021, duration: "6:29" },
        { number: 4, title: "Cry Your Heart Out", album: "30", year: 2021, duration: "4:15" },
        { number: 5, title: "Oh My God", album: "30", year: 2021, duration: "3:45" },
        { number: 6, title: "Can I Get It", album: "30", year: 2021, duration: "3:30" },
        { number: 7, title: "I Drink Wine", album: "30", year: 2021, duration: "6:16" },
        { number: 8, title: "All Night Parking (Interlude)", album: "30", year: 2021, duration: "2:41" },
        { number: 9, title: "Woman Like Me", album: "30", year: 2021, duration: "5:00" },
        { number: 10, title: "Hold On", album: "30", year: 2021, duration: "6:06" },
        { number: 11, title: "To Be Loved", album: "30", year: 2021, duration: "6:43" },
        { number: 12, title: "Love Is a Game", album: "30", year: 2021, duration: "6:43" }
    ],
    [
        { number: 1, title: "Let It Happen", album: "Currents", year: 2015, duration: "7:46" },
        { number: 2, title: "Nangs", album: "Currents", year: 2015, duration: "1:48" },
        { number: 3, title: "The Moment", album: "Currents", year: 2015, duration: "4:15" },
        { number: 4, title: "Yes I'm Changing", album: "Currents", year: 2015, duration: "4:30" },
        { number: 5, title: "Eventually", album: "Currents", year: 2015, duration: "5:19" },
        { number: 6, title: "Gossip", album: "Currents", year: 2015, duration: "0:55" },
        { number: 7, title: "The Less I Know the Better", album: "Currents", year: 2015, duration: "3:36" },
        { number: 8, title: "Past Life", album: "Currents", year: 2015, duration: "3:48" },
        { number: 9, title: "Disciples", album: "Currents", year: 2015, duration: "1:48" },
        { number: 10, title: "'Cause I'm a Man", album: "Currents", year: 2015, duration: "4:02" },
        { number: 11, title: "Reality in Motion", album: "Currents", year: 2015, duration: "4:12" },
        { number: 12, title: "Love/Paranoia", album: "Currents", year: 2015, duration: "3:06" },
        { number: 13, title: "New Person, Same Old Mistakes", album: "Currents", year: 2015, duration: "6:03" }
    ],
    [
        { number: 1, title: "No Me Platiques Más", album: "Romance", year: 1991, duration: "3:35" },
        { number: 2, title: "Inolvidable", album: "Romance", year: 1991, duration: "4:38" },
        { number: 3, title: "La Puerta", album: "Romance", year: 1991, duration: "3:29" },
        { number: 4, title: "La Barca", album: "Romance", year: 1991, duration: "3:49" },
        { number: 5, title: "Te Extraño", album: "Romance", year: 1991, duration: "4:28" },
        { number: 6, title: "Usted", album: "Romance", year: 1991, duration: "2:58" },
        { number: 7, title: "Contigo en la Distancia", album: "Romance", year: 1991, duration: "2:36" },
        { number: 8, title: "Mucho Corazón", album: "Romance", year: 1991, duration: "3:14" },
        { number: 9, title: "La Mentira", album: "Romance", year: 1991, duration: "3:34" },
        { number: 10, title: "Cuando Vuelva a Tu Lado", album: "Romance", year: 1991, duration: "2:56" },
        { number: 11, title: "No Sé Tú", album: "Romance", year: 1991, duration: "3:49" },
        { number: 12, title: "Cómo", album: "Romance", year: 1991, duration: "3:32" }
    ],
];

// Listas de álbumes para los carruseles (simulan diferentes categorías).
const albums1 = [
    { title: "Thriller", author: "Michael Jackson", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)" },
    { title: "Back in Black", author: "AC/DC", gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
    { title: "The Dark Side of the Moon", author: "Pink Floyd", gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
    { title: "Rumours", author: "Fleetwood Mac", gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" },
    { title: "Abbey Road", author: "The Beatles", gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
    { title: "Hotel California", author: "Eagles", gradient: "linear-gradient(135deg, #fbc2eb 0%, #fcb69f 100%)" },
    { title: "Born in the U.S.A.", author: "Bruce Springsteen", gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)" },
    { title: "21", author: "Adele", gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
    { title: "Nevermind", author: "Nirvana", gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
    { title: "Bad", author: "Michael Jackson", gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" },
    { title: "Sgt. Pepper's Lonely Hearts Club Band", author: "The Beatles", gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
    { title: "A Night at the Opera", author: "Queen", gradient: "linear-gradient(135deg, #fbc2eb 0%, #fcb69f 100%)" },
];
const albums2 = [
    { title: "Random Access Memories", author: "Daft Punk", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { title: "Future Nostalgia", author: "Dua Lipa", gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
    { title: "Fine Line", author: "Harry Styles", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
    { title: "After Hours", author: "The Weeknd", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { title: "SOUR", author: "Olivia Rodrigo", gradient: "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)" },
    { title: "Justice", author: "Justin Bieber", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
    { title: "Un Verano Sin Ti", author: "Bad Bunny", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { title: "Happier Than Ever", author: "Billie Eilish", gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
    { title: "Montero", author: "Lil Nas X", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
    { title: "El Madrileño", author: "C. Tangana", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
    { title: "Colores", author: "J Balvin", gradient: "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)" },
    { title: "YHLQMDLG", author: "Bad Bunny", gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)" },
];

const albums3 = [
    { title: "Divide", author: "Ed Sheeran", gradient: "linear-gradient(135deg, #a770ef 0%, #f6d365 100%)" },
    { title: "X 100PRE", author: "Bad Bunny", gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" },
    { title: "DAMN.", author: "Kendrick Lamar", gradient: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)" },
    { title: "El Mal Querer", author: "Rosalía", gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)" },
    { title: "AM", author: "Arctic Monkeys", gradient: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" },
    { title: "Golden Hour", author: "Kacey Musgraves", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { title: "Unorthodox Jukebox", author: "Bruno Mars", gradient: "linear-gradient(135deg, #a770ef 0%, #f6d365 100%)" },
    { title: "Lover", author: "Taylor Swift", gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)" },
    { title: "MTV Unplugged", author: "Shakira", gradient: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)" },
    { title: "F.A.M.E.", author: "Maluma", gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)" },
    { title: "Future/LoveSounds", author: "Justin Timberlake", gradient: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" },
    { title: "Discovery", author: "Daft Punk", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
];

function Home() {
    // Estado para controlar qué álbum está expandido (mostrando detalles).
    const [openAlbum, setOpenAlbum] = useState(null);
    // Hook para navegar entre rutas.
    const navigate = useNavigate();

    return (
        <div>
            {/* Sección de álbumes destacados, con animación de expansión al hacer clic */}
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
                        {/* Imagen del álbum */}
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
                            {/* Si el álbum está expandido, mostramos más detalles y el botón para ver más canciones */}
                            {openAlbum === idx && (
                                <>
                                    <p style={{ margin: "0.5rem 0" }}>
                                        <strong>Descripción:</strong> Álbum destacado de {album.author}.
                                    </p>
                                    <p style={{ margin: "0.5rem 0" }}>
                                        <strong>Año:</strong> {album.songs[0].year}
                                    </p>

                                    <button
                                        style={{
                                            marginTop: "0.5rem",
                                            padding: "0.4rem 1.2rem",
                                            borderRadius: "8px",
                                            border: "none",
                                            background: "#646cff",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}
                                        onClick={e => {
                                            e.stopPropagation();
                                            navigate(`/album/${album.id}`);
                                        }}
                                    >
                                        Ver más canciones
                                    </button>

                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Si hay un álbum expandido, mostramos la tabla de canciones */}
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

            {/* Carruseles de álbumes por categoría */}
            <AlbumCarousel title="Top Álbumes" albums={albums1} />
            <AlbumCarousel title="Nuevos Lanzamientos" albums={albums2} />
            <AlbumCarousel title="Recomendados" albums={albums3} />
        </div>
    );
}

export default Home;