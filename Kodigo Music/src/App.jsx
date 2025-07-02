import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MusicForm from "./components/MusicForm";
import AlbumDetail from "./components/AlbumDetail";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Favorites from "./components/Favorites";
import Player from "./components/Player";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/player" element={<Player />} />
        <Route path="/music-form" element={<MusicForm />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} /> {/* Nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;