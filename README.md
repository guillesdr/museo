# Museo Histórico Guácaras

Un sitio web estático que presenta la historia de Santa Ana de los Guácaras a través de cuatro salas temáticas interactivas con contenido audiovisual.

## 📋 Descripción del Proyecto

Este proyecto es un museo virtual que preserva y presenta la rica historia de Santa Ana de los Guácaras, una localidad histórica de la provincia de Corrientes, Argentina. El sitio web utiliza tecnologías modernas para crear una experiencia inmersiva que combina testimonios orales, documentación histórica y elementos visuales atractivos.

## 🏛️ Estructura del Museo

### Salas Temáticas

1. **Sala 1 - Orígenes** 🌱
   - Testimonios sobre los orígenes históricos de Santa Ana
   - Archivo documental provincial
   - Color temático: `#7f2629` (rojo granate)

2. **Sala 2 - Santa Ana** 🏠
   - Vida cotidiana y tradiciones familiares
   - Testimonios de pobladores locales
   - Color temático: `#cda787` (beige dorado)

3. **Sala 3 - Ingenio** 🏭
   - Historia del Ingenio Primer Correntino
   - Testimonios de trabajadores y sus familias
   - Color temático: `#415364` (azul grisáceo)

4. **Sala 4 - Trencito Económico** 🚂
   - El mítico tren que conectaba la región
   - Impacto económico y social del ferrocarril
   - Color temático: `#8c9091` (gris metálico)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos personalizados con efectos glassmorphism
- **JavaScript ES6+** - Interactividad y carga dinámica de templates
- **Bootstrap 5.3.3** - Framework responsivo
- **FontAwesome 6.5.2** - Iconografía
- **Google Fonts** - Tipografías Playfair Display y Roboto

### Reproductor de Video
- **Plyr.js 3.7.8** - Reproductor de video moderno y accesible

### Efectos Visuales
- Gradientes CSS personalizados
- Animaciones con keyframes
- Efectos glassmorphism
- Transiciones suaves
- Scroll indicators

## 📁 Estructura del Proyecto

```
museo/
├── index.html                 # Página principal
├── sala1.html                 # Sala Orígenes
├── sala2.html                 # Sala Santa Ana
├── sala3.html                 # Sala Ingenio  
├── sala4.html                 # Sala Trencito Económico
├── README.md                  # Documentación del proyecto
├── templates/                 # Plantillas compartidas
│   ├── header.html           # Encabezado común
│   ├── footer.html           # Pie de página común
│   └── img/                  # Imágenes de templates
├── theme_front/              # Recursos del tema
│   ├── css/
│   │   ├── base.css          # Estilos base
│   │   ├── modern-components.css # Componentes modernos
│   │   └── styles-1.css      # Estilos adicionales
│   ├── fonts/                # Fuentes locales Montserrat
│   ├── img/                  # Imágenes del proyecto
│   │   ├── sala1/           # Imágenes específicas Sala 1
│   │   ├── sala2/           # Imágenes específicas Sala 2
│   │   ├── sala3/           # Imágenes específicas Sala 3
│   │   └── sala4/           # Imágenes específicas Sala 4
│   ├── js/                   # Scripts personalizados
│   └── lib/                  # Librerías locales (Bootstrap, jQuery)
└── videos/                   # Contenido audiovisual
    ├── sala1/               # Videos Sala Orígenes
    ├── sala2/               # Videos Sala Santa Ana
    ├── sala3/               # Videos Sala Ingenio
    └── sala4/               # Videos Sala Trencito
```

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: `#4a2c1e` (marrón oscuro)
- **Fondo**: `#faf8f5` (blanco roto)
- **Acento**: `#f1dca7` (dorado claro)
- **Salas**: Cada sala tiene su color temático distintivo

### Tipografía
- **Títulos**: Playfair Display (serif elegante)
- **Cuerpo**: Roboto (sans-serif legible)
- **Jerarquía**: Sistema escalado con buen contraste

### Componentes Modernos
- **Cards glassmorphism**: Efectos de vidrio translúcido
- **Video cards**: Contenedores especializados para multimedia
- **Badges temáticos**: Identificadores visuales por sala
- **FAB**: Floating Action Button para navegación
- **Tooltips**: Información contextual al hover

## ⚡ Características Principales

### Arquitectura Modular
- **Template System**: Header y footer cargados dinámicamente
- **Componentización**: Elementos reutilizables
- **Separación de responsabilidades**: CSS, JS y HTML organizados

### Experiencia de Usuario
- **Responsive Design**: Adaptable a todos los dispositivos
- **Navegación intuitiva**: Enlaces contextuales entre salas
- **Scroll suave**: Transiciones fluidas
- **Loading animations**: Feedbacks visuales
- **Accesibilidad**: Semántica HTML5 correcta

### Performance
- **CDN Resources**: Bootstrap y FontAwesome desde CDN
- **Optimized Assets**: Imágenes organizadas por contexto
- **Lazy Loading**: Carga eficiente de contenido
- **Modern JavaScript**: ES6+ para mejor rendimiento

## 🚀 Instalación y Uso

### Requisitos
- Servidor web local (Apache, Nginx, Live Server, etc.)
- Navegador moderno con soporte ES6+

### Instalación
1. Clonar o descargar el repositorio
2. Servir los archivos desde un servidor web local
3. Abrir `index.html` en el navegador

```bash
# Usando Python (desde la carpeta del proyecto)
python -m http.server 8000

# Usando Node.js live-server
npx live-server

# O simplemente abrir con VS Code Live Server
```

### Estructura de URLs
- `/` - Página principal
- `/sala1.html` - Sala Orígenes
- `/sala2.html` - Sala Santa Ana  
- `/sala3.html` - Sala Ingenio
- `/sala4.html` - Sala Trencito Económico

## 🎥 Contenido Multimedia

### Videos por Sala
- **Sala 1**: Testimonios del Prof. Jorge Enrique Deniri
- **Sala 2**: Relatos familiares de Corsinia Soto y Gregorio Benítez
- **Sala 3**: Testimonios laborales del Ingenio Primer Correntino
- **Sala 4**: Historia del Trencito Económico con archivo histórico

### Formatos Soportados
- **Video**: MP4 (H.264)
- **Posters**: JPG optimizados
- **Responsive**: Adaptación automática de calidad

## 🔧 Configuración

### Personalización de Colores
Los colores temáticos se definen en `theme_front/css/base.css`:

```css
:root {
  --primary-color: #4a2c1e;
  --accent-color: #f1dca7;
  --background-color: #faf8f5;
  --sala-1-color: #7f2629;
  --sala-2-color: #cda787;
  --sala-3-color: #415364;
  --sala-4-color: #8c9091;
}
```

### Agregar Nuevas Salas
1. Crear `salaN.html` siguiendo el patrón existente
2. Añadir imágenes en `theme_front/img/salaN/`
3. Actualizar navegación en todas las salas
4. Agregar entrada en `index.html`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 992px  
- **Desktop**: > 992px

### Adaptaciones
- Grid flexible con Bootstrap
- Imágenes responsivas
- Navegación mobile-friendly
- Touch-friendly interactions

## 🌐 SEO y Accesibilidad

### SEO
- Meta tags optimizados por página
- Estructura semántica HTML5
- URLs descriptivas
- Open Graph preparado

### Accesibilidad
- Alt texts en imágenes
- Contraste de colores WCAG
- Navegación por teclado
- Roles ARIA apropiados

## 🤝 Contribución

### Pautas de Desarrollo
1. Mantener la estructura modular existente
2. Seguir la guía de estilos CSS establecida
3. Usar el sistema de colores temáticos
4. Preservar la accesibilidad
5. Optimizar assets multimedia

### Estructura de Commits
```
feat: nueva funcionalidad
fix: corrección de bug  
style: cambios de estilo
docs: actualización documentación
refactor: refactorización código
```

## 📄 Licencia

Este proyecto documenta el patrimonio histórico de Santa Ana de los Guácaras y está destinado a fines educativos y culturales.

## 👥 Créditos

### Testimonios Históricos
- Prof. Jorge Enrique Deniri - Director del Archivo General de la Provincia de Corrientes
- Doña Corsinia Soto - Testimonio Familiar
- Dn. Gregorio Benítez - Vecino Histórico
- José Federico Carbó - Testimonio Histórico
- Don Velazco Frías - Testimonio Personal
- Don Servando Zarate - Trabajador del Ingenio
- Jorge Garreta Mendoza - Empresario Industrial
- Pobladores de Santa Ana - Testimonios Comunitarios

### Desarrollo
- Arquitectura web moderna
- Sistema de componentes reutilizables
- Diseño responsive y accesible

---

**Museo Histórico Guácaras** - Preservando la memoria de Santa Ana de los Guácaras para las futuras generaciones.