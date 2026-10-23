export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por comunicarte con CGC! Tu consulta ha sido enviada con éxito.');
  };

  return (
    <main className="contacto-main" style={{ display: 'block', minHeight: '80vh', padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
      <section className="contacto-seccion" style={{ maxWidth: '800px', margin: '0 auto', background: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        
        <h2 style={{ color: '#333333', fontSize: '28px', marginBottom: '10px', textAlign: 'center', display: 'block' }}>
          Póngase en Contacto con Nosotros
        </h2>
        <p className="contacto-subtitulo" style={{ color: '#666666', marginBottom: '30px', textAlign: 'center', display: 'block' }}>
          Envíenos su consulta y un asesor de CGC se comunicará a la brevedad para guiarlo en su próximo proyecto.
        </p>
        
        {/* Formulario visible */}
        <form onSubmit={handleSubmit} className="formulario-contacto" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="grupo-formulario" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="nombre" style={{ fontWeight: 'bold', color: '#333' }}>Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej. Juan Pérez" required style={{ padding: '12px', border: '1px solid #cccccc', borderRadius: '4px', fontSize: '16px', color: '#000' }} />
          </div>

          <div className="grupo-formulario" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', color: '#333' }}>Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required style={{ padding: '12px', border: '1px solid #cccccc', borderRadius: '4px', fontSize: '16px', color: '#000' }} />
          </div>

          <div className="grupo-formulario" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="telefono" style={{ fontWeight: 'bold', color: '#333' }}>Teléfono de Contacto</label>
            <input type="tel" id="telefono" name="telefono" placeholder="Ej. +54 9 294 4123456" style={{ padding: '12px', border: '1px solid #cccccc', borderRadius: '4px', fontSize: '16px', color: '#000' }} />
          </div>

          <div className="grupo-formulario" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="motivo" style={{ fontWeight: 'bold', color: '#333' }}>Motivo de la Consulta</label>
            <select id="motivo" name="motivo" required defaultValue="" style={{ padding: '12px', border: '1px solid #cccccc', borderRadius: '4px', fontSize: '16px', backgroundColor: '#fff', color: '#000' }}>
              <option value="" disabled>Seleccione una opción</option>
              <option value="comprar">Quiero Comprar</option>
              <option value="alquilar">Quiero Alquilar</option>
              <option value="tasacion">Solicitar Tasación</option>
              <option value="temporal">Alquiler Temporal</option>
              <option value="otra">Otra Consulta</option>
            </select>
          </div>

          <div className="grupo-formulario" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label htmlFor="mensaje" style={{ fontWeight: 'bold', color: '#333' }}>Mensaje o Detalles del Inmueble</label>
            <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escriba aquí los detalles de su consulta..." required style={{ padding: '12px', border: '1px solid #cccccc', borderRadius: '4px', fontSize: '16px', fontFamily: 'inherit', color: '#000' }}></textarea>
          </div>

          <button type="submit" className="btn btn-primario btn-formulario" style={{ padding: '14px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
            Enviar Consulta
          </button>
        </form>
      </section>
    </main>
  );
}