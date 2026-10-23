export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bar">
        <div className="brand-footer">
          <img src="/CGC sin fondo.png" alt="CGC Negocios Inmobiliarios" className="logo-footer-img" />
          <h2>CGC Negocios Inmobiliarios</h2>
        </div> 
        
        <div className="footer-redes">
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="cgc-mail">
            <img src="/icons.svg" alt="Gmail" className="icono-mail" style={{ marginRight: '5px', width: '20px' }} />
            <span>Mail</span>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="Telefono">
            <img src="/icons.svg" alt="Icono-wpp" className="icono-telefono" style={{ marginRight: '5px', width: '20px' }} />
            <span>Telefono</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="Facebook">
            <img src="/icons.svg" alt="Icono-face" className="icono-face" style={{ marginRight: '5px', width: '20px' }} />
            <span>Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-instagram">
            <img src="/icons.svg" alt="Icono-de-Insta" className="icono-insta" style={{ marginRight: '5px', width: '20px' }} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <p>© 2026 CGC Negocios Inmobiliarios. Todos los derechos reservados.</p>
    </footer>
  );
}