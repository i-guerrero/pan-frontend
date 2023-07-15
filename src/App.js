import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Events from "./Components/Events/Events";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Testimonials />
      <Events />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;
