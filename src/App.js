import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';
import Testimonial from './pages/testimonial/Testimonial';
import OurTeam from './pages/our-team/OurTeam';
import Booking from './pages/booking/Booking';
import Menu from './pages/menu/Menu';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
