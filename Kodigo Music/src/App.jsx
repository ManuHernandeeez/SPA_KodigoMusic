import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MusicForm from "./components/MusicForm";
import AlbumDetail from "./components/AlbumDetail";
import Footer from "./components/Footer";


function App() {
  return (


      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-form" element={<MusicForm />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;