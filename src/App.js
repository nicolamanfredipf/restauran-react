import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
