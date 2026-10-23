CGC Negocios Inmobiliarios - Catálogo Digital
Este es un desarrollo web moderno para la inmobiliaria CGC Negocios Inmobiliarios, diseñado para la promoción y visualización de propiedades, lotes y alquileres temporales en la región de la Patagonia.
El proyecto representa una migración completa de un entorno estático basado en HTML5 y CSS3 hacia una aplicación de página única (SPA) estructurada y modularizada utilizando React y empaquetada con Vite.

Tecnologías Utilizadas

• React 18 - Biblioteca de JavaScript para la construcción de interfaces de usuario modulares.
• Vite - Herramienta de empaquetado y servidor de desarrollo ultra rápido.
• React Router Dom (v6) - Sistema profesional de enrutamiento dinámico para la navegación entre páginas sin recarga de navegador.
• HTML5 & CSS3 nativo - Estilos originales y estructuración adaptativa heredada.


Estructura del Proyecto

La arquitectura del código se organizó de manera centralizada en la carpeta src/data para simplificar la gestión de componentes y datos dinámicos durante el desarrollo:

proyecto-cgc/
├── public/                  # Archivos multimedia (Video de fondo, fotos por propiedad, logos)
│   ├── propiedad-1/ to 8/   # Galerías ordenadas por ID de inmueble
│   ├── CGC sin fondo.png    # Logo institucional
│   └── PURA PATAGONIA - Trim.mp4 # Video Hero principal
├── src/
│   ├── data/                # Carpeta central de lógica e interfaz
│   │   ├── Contacto.jsx     # Formulario estandarizado a JSX
│   │   ├── Footer.jsx       # Pie de página institucional y redes sociales
│   │   ├── Header.jsx       # Barra de navegación interactiva con React Router
│   │   ├── Inicio.jsx       # Vista del catálogo completo de propiedades
│   │   ├── PropiedadCard.jsx # Componente reusable para las tarjetas de inmuebles
│   │   ├── PropiedadDetalle.jsx # Vista interna dinámica de la galería mosaico
│   │   └── PropiedadesData.js   # Base de datos simulada (Array de objetos)
│   ├── App.jsx              # Cerebro de enrutamiento y estructura global de la SPA
│   ├── index.css            # Archivo unificado de estilos CSS nativos
│   └── main.jsx             # Punto de entrada de la aplicación React
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Documentación del sistema


Características Implementadas

1. Enrutamiento Dinámico por ID: Al hacer clic en "Ver más", el sistema lee el identificador único de la propiedad de manera dinámica mediante useParams y renderiza su respectivo mosaico de imágenes sin duplicar archivos.
2. Carga Eficiente desde Carpeta Public: Los assets audiovisuales pesados (como el video en bucle del Hero) se sirven de forma directa eliminando la sobrecarga en el proceso de compilación de React.
3. Formulario Validado en JSX: Interfaz de contacto fiel al modelo original, adaptando selectores de formulario nativos a las directivas de control de estados de React.

