import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MusicForm from "./components/MusicForm";


function App() {
  return (
    

    <Router>
      
<h1>hi</h1>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music-form" element={<MusicForm />} />
      </Routes>

    </Router>
  );
}

export default App;