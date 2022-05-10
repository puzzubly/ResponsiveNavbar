import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectA from "./components/pages/ProjectA";
import ProjectB from "./components/pages/ProjectB";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projecta" element={<ProjectA />} />
            <Route path="/projectb" element={<ProjectB />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
