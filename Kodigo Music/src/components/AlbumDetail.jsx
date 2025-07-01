//hooks de React Router para la URL y rutas
import { useParams, useNavigate } from "react-router-dom";
import { fullAlbumSongs } from "./Home";
// imagenes de los álbumes
import album1Img from '../img/1.jpg';
import album2Img from '../img/2.jpg';
import album3Img from '../img/3.jpg';

// Información de los álbumes 
const albumsInfo = [
    {
        title: "Éxitos Pop",
        author: "Varios Artistas",
        image: album1Img,
    },
    {
        title: "Rock Clásico",
        author: "Varios Artistas",
        image: album2Img,
    },
    {
        title: "Lo Mejor del Jazz",
        author: "Varios Artistas",
        image: album3Img,
    },
];

function AlbumDetail() {
    // Obtenemos el id de la URL y la función para navegar.
    const { id } = useParams();
    const navigate = useNavigate();
    // obtenemos la info y canciones del álbum correspondiente.
    const albumId = parseInt(id, 10);
    const album = albumsInfo[albumId];
    const songs = fullAlbumSongs[albumId];

    if (!album) return <div>Álbum no encontrado</div>;

    // Renderizamos la información del álbum y la tabla de canciones.
    return (
        <div style={{ maxWidth: 700, margin: "2rem auto", background: "#232323", borderRadius: 20, padding: "2rem" }}>
            {/* Botón para volver a la página anterior */}
            <button onClick={() => navigate(-1)} style={{
                background: "#646cff", color: "#fff", border: "none", borderRadius: 8, padding: "0.5rem 1.2rem", marginBottom: "1.5rem", cursor: "pointer"
            }}>← Volver</button>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "2rem" }}>
                {/* Imagen y datos principales del álbum */}
                <img src={album.image} alt={album.title} style={{ width: 180, height: 180, borderRadius: 20, objectFit: "cover", boxShadow: "0 4px 24px #0008" }} />
                <div>
                    <h2>{album.title}</h2>
                    <p>{album.author}</p>
                    <p><strong>Canciones:</strong> {songs.length}</p>
                </div>
            </div>
            <h3 style={{ marginTop: "2rem" }}>Todas las canciones</h3>
            {/* Tabla con la lista de canciones del álbum */}
            <table style={{ width: "100%", color: "#fff", borderCollapse: "collapse", background: "#232323cc", borderRadius: 12 }}>
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
                    {songs.map((song, i) => (
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
    );
}

export default AlbumDetail;