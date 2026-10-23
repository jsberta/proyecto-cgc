import { useParams, Link } from 'react-router-dom';
import { PropiedadesData } from './PropiedadesData.js';

export default function PropiedadDetalle() {
  const { id } = useParams(); 
  const propiedad = PropiedadesData.find((item) => item.id === parseInt(id));

  if (!propiedad) {
    return <h2 style={{ color: 'white', padding: '50px', textAlign: 'center' }}>Propiedad no encontrada</h2>;
  }


  let ext = 'jpg'; 

  if (propiedad.id === 1) ext = 'png';
  if (propiedad.id === 2 || propiedad.id === 3) ext = 'jpeg';
  if (propiedad.id === 5) ext = 'png'; 
  if (propiedad.id === 6) ext = 'jpg';
  if (propiedad.id === 7) ext = 'jpg';
  if (propiedad.id === 8) ext = 'jpg';

  // Armamos las rutas del mosaico 
  const fotosGaleria = [
    `/propiedad-${propiedad.id}/img1.${ext}`,
    `/propiedad-${propiedad.id}/img2.${ext}`,
    `/propiedad-${propiedad.id}/img3.${ext}`,
    `/propiedad-${propiedad.id}/img4.${ext}`
  ];

  return (
    <div className="detalle-propiedad" style={{ backgroundColor: '#fff', minHeight: '80vh', padding: '20px' }}>
      <div className="volver-atras" style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>← Volver al catálogo</Link>
      </div>

      <div className="detalle-header" style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color: '#143317' }}>{propiedad.title}</h1>
        <p className="ubicacion" style={{ color: '#666' }}>Esquel, Chubut, Patagonia</p>
      </div>

      <div className="galeria-mosaico">
        {fotosGaleria.map((foto, index) => (
          <img 
            key={index} 
            src={foto} 
            alt={`Vista ${index + 1}`} 
            style={{ borderRadius: '8px', objectFit: 'cover' }}
            onError={(e) => {
              // Si falla, intentamos cargarla en mayúsculas automáticamente por si acaso
              if (!foto.includes('JPG') && ext === 'jpg') {
                e.target.src = `/propiedad-${propiedad.id}/img${index + 1}.JPG`;
              }
            }}
          />
        ))}
      </div>

      <div className="detalle-texto" style={{ marginTop: '40px' }}>
        <div className="descripcion-parrafo">
          <h2 style={{ color: '#143317', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Descripción</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '15px' }}>{propiedad.description}</p>
        </div>
      </div>
    </div>
  );
}