import "./App.css";
import HomeSection from "./HomeSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <Router className="App">
      <Routes className="App-header">
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
