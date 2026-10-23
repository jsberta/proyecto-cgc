import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-bar">
        <div className="brand">
          <Link to="/">
            <img src="/CGC sin fondo.png" alt="CGC Negocios Inmobiliarios" className="logo-img" />
          </Link>
          <h1>CGC Negocios Inmobiliarios</h1>
        </div> 
        
        <nav className="barra-navegacion">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Propiedades</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}