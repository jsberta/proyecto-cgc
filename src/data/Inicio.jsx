import PropiedadCard from './PropiedadCard.jsx';
import { PropiedadesData } from './PropiedadesData.js';

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/PURA PATAGONIA - Trim.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-contenido">
            <h1 style={{ fontSize: '35px' }}>Encuentra tu próximo hogar en la Patagonia</h1>
            <p>Tu inversión segura con profesionales de confianza.</p>
            <div className="hero-buttons">
              <a href="#propiedades" className="btn btn-primario">Ver Catálogo</a>
            </div>
          </div>
        </div>
      </section>

      <main className="main-propiedades" id="propiedades">
        <div className="propiedades-header">
          <h1>Nuestro Catálogo de Inmuebles</h1>
          <p>Explorá nuestras opciones disponibles en la Patagonia</p>
        </div>

        <section className="todas-cards">
          {PropiedadesData.map((item) => (
            <PropiedadCard
              key={item.id}
              id={item.id} 
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </section>
      </main>
    </>
  );
}