import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from "./components/Contact";  

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: '50px' }}> {/* Prevents content from overlapping footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
