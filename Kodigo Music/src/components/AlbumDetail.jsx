import { useParams, useNavigate } from "react-router-dom";

const featuredAlbums = [
  {
    title: "Éxitos Pop",
    author: "Varios Artistas",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    songs: ["Canción 1", "Canción 2", "Canción 3"],
  },
  {
    title: "Rock Clásico",
    author: "Varios Artistas",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    songs: ["Rock 1", "Rock 2", "Rock 3"],
  },
  {
    title: "Lo Mejor del Jazz",
    author: "Varios Artistas",
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    songs: ["Jazz 1", "Jazz 2", "Jazz 3"],
  },
];

function AlbumDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const album = featuredAlbums[id];

  if (!album) return <div>Álbum no encontrado</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>Volver</button>
      <div
        className="album-card"
        style={{
          background: album.gradient,
          width: 220,
          height: 220,
          margin: "0 auto 1rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: "#fff4",
            borderRadius: 16,
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 22,
            color: "#fff",
          }}
        >
          Img
        </div>
        <h2>{album.title}</h2>
        <p>{album.author}</p>
      </div>
      <h3>Canciones</h3>
      <ul>
        {album.songs.map((song, idx) => (
          <li key={idx}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumDetail;