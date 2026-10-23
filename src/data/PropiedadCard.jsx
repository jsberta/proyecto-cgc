import { Link } from 'react-router-dom';

export default function PropiedadCard({ id, title, description, image }) {
  return (
    <article className="card-propiedad">
      <div className="card-imagen">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/propiedad/${id}`} className="btn-ver-mas">
          Ver más
        </Link>
      </div>
    </article>
  );
}