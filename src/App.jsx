import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./data/Header.jsx";
import Footer from "./data/Footer.jsx";
import Inicio from "./data/Inicio.jsx";
import PropiedadDetalle from "./data/PropiedadDetalle.jsx";
import Contacto from "./data/Contacto.jsx"; // 

export default function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Header />

        
        <Routes>
          
          <Route path="/" element={<Inicio />} />
          
          <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
           
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}