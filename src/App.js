import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Events from "./Components/Events/Events";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import Timeline from "./Components/Timeline/Timeline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <About />
        <Timeline />
        <Testimonials />
        <Events />
        <Partners />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
