# Inmobiliaria Leyva Illescas

Aplicación web moderna desarrollada con Angular para la gestión y visualización de propiedades inmobiliarias. Incluye sistema de autenticación, modo oscuro/claro, filtros avanzados y diseño completamente responsive.

## 🚀 Características Principales

- **Catálogo de Inmuebles**: Visualización de más de 40 propiedades con filtros avanzados
- **Sistema de Autenticación**: Registro e inicio de sesión con validaciones y almacenamiento local
- **Modo Oscuro/Claro**: Tema adaptable con preferencias guardadas
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Filtros Avanzados**: Búsqueda por tipo, provincia, ciudad, precio, habitaciones y baños
- **Galería de Imágenes**: Carruseles de imágenes en cards y páginas de detalle
- **Formulario de Contacto**: Integración con EmailJS para envío de correos
- **Banner de Cookies**: Sistema de consentimiento de cookies con almacenamiento local

### Páginas Disponibles
Home, Inmuebles, Detalle de Inmueble, Historia, Postventa, Contacto, Login/Registro, Privacidad y Términos

## 🛠️ Tecnologías Utilizadas

- **Angular 20.3**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Tailwind CSS 4.1**: Framework de estilos utility-first
- **AOS**: Animaciones al hacer scroll
- **SweetAlert2**: Alertas y notificaciones personalizadas
- **EmailJS**: Servicio de envío de correos

## 📦 Instalación

### Prerrequisitos
- Node.js (v20.19 o superior, o v22.12+)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/JoseCalderon18/Ampliacion.git
cd Ampliacion
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
ng serve
# o
npm start
```

4. **Abrir en el navegador**: `http://localhost:4200`

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── card-home/      # Cards de características
│   │   ├── card-inmueble/  # Cards de propiedades
│   │   ├── card-duenio/    # Cards de fundadores
│   │   ├── cronologia/     # Línea de tiempo
│   │   ├── form/           # Formulario de contacto
│   │   ├── header/         # Header con navegación
│   │   ├── footer/         # Footer
│   │   └── cookies/        # Banner de cookies
│   ├── pages/              # Páginas principales
│   ├── services/           # Servicios (theme, user, email)
│   └── models/             # Modelos de datos
└── controllers/            # Controladores
```

## 🔐 Sistema de Autenticación

- **Registro de usuarios**: Validación de email único y hash de contraseñas
- **Inicio de sesión**: Autenticación con email y contraseña
- **Almacenamiento local**: Datos guardados en localStorage
- **Sesión persistente**: Estado de sesión mantenido entre recargas

## 🧩 Componentes y Comunicación

### Componentes con @Input y @Output

- **CardInmuebleComponent**: `@Input() casa`, `@Output() propiedadSeleccionada`, `@Output() imagenCambiada`
- **FormComponent**: `@Output() emailEnviado`, `@Output() errorEnvio`
- **CardHomeComponent**: `@Output() cardSeleccionada`
- **CardDuenioComponent**: `@Input() foto`, `@Input() nombre`, `@Input() titulo`, `@Input() descripcion`

Todos los componentes principales incluyen documentación JSDoc completa.

## 🧪 Pruebas Unitarias

**Estado actual: 36/36 tests pasando (100%)** ✅

- **CardInmuebleComponent** (10 tests): Navegación de imágenes, eventos, casos límite
- **FormComponent** (7 tests): Validación, eventos, conversión de asunto
- **CardHomeComponent** (5 tests): Estructura de datos, eventos
- **Otros componentes**: Tests de creación para todos los componentes principales

**Características**: Mocks completos de servicios, sin alertas durante tests, cobertura completa.

Ejecutar tests: `ng test` o `ng test --code-coverage`

## 🎨 Modo Oscuro/Claro

- Toggle en Header para cambiar entre modos
- Preferencias guardadas en localStorage
- Todos los componentes adaptados a ambos modos

## 🔍 Filtros de Inmuebles

**Filtros disponibles**: Tipo, Provincia, Ciudad, Precio, Habitaciones, Baños

**Características**: Filtros múltiples combinables, responsive (modal en móvil, sidebar en desktop), botón limpiar, contador de resultados

## 📱 Diseño Responsive

**Breakpoints**: Móvil (< 640px), Tablet (640px - 1024px), Desktop (> 1024px)

**Adaptaciones**: Grid de inmuebles (1→2→3 columnas), filtros (modal→sidebar), navegación (hamburguesa→horizontal), paginación (compacta→completa)

## 🎯 Comandos Disponibles

```bash
# Desarrollo
ng serve                    # Iniciar servidor de desarrollo
ng build                    # Compilar para producción
npm run build              # Build de producción optimizado

# Testing
ng test                    # Ejecutar tests unitarios
ng test --code-coverage    # Tests con cobertura
```

## 🚀 Despliegue en Netlify

### Despliegue desde Git (Recomendado)

1. **Subir código a GitHub/GitLab/Bitbucket**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/JoseCalderon18/Ampliacion.git
git branch -M main
git push -u origin main
```

2. **Conectar con Netlify**
   - Ir a [netlify.com](https://www.netlify.com/)
   - "Add new site" → "Import an existing project"
   - Seleccionar repositorio
   - Configuración automática (detecta `netlify.toml`):
     - **Build command**: `npm run build`
     - **Publish directory**: `dist/Ampliacion/browser`

3. **Despliegue automático**: Cada `git push` despliega automáticamente

**Ventajas**: Despliegue automático, historial de versiones, rollback fácil

### Despliegue Manual
```bash
npm run build
# Subir carpeta dist/Ampliacion/browser a Netlify manualmente
```

## 📚 Características Técnicas

✅ **Estructura del proyecto**: Organizada en carpetas (components, services, models, pages)  
✅ **Componentes mínimos**: Home + 8 componentes adicionales  
✅ **Navegación**: Angular Router completamente implementado  
✅ **Funcionalidad básica**: Todos los componentes tienen funcionalidad dinámica  
✅ **Estilo coherente**: Tailwind CSS con diseño responsive  
✅ **Documentación**: JSDoc completo en todos los componentes principales  
✅ **Propiedades y Métodos**: @Input() y métodos bien definidos con tipos  
✅ **Eventos**: @Output() y EventEmitter implementados en componentes clave  
✅ **Pruebas**: Pruebas unitarias completas y significativas  
✅ **Empaquetado**: Build de producción funcional y optimizado  

**Detalles**: 18 componentes, 3 servicios, 2 modelos, 36 pruebas unitarias (100% pasando), documentación JSDoc completa, @Input/@Output para comunicación entre componentes.

## 📝 Notas Adicionales

- **EmailJS**: Configurar credenciales en `emailService.ts` para el formulario de contacto
- **Datos de prueba**: 40 propiedades de ejemplo incluidas
- **Personalización**: Colores en `tailwind.config.js`, propiedades en `controladorCasas.ts`

## 👥 Desarrollo

Proyecto desarrollado para **Inmobiliaria Leyva Illescas** - Inmobiliaria desde 1998

Este proyecto fue desarrollado como parte de la evaluación del módulo "Ampliación desarrollo de interfaces" del ciclo formativo de Desarrollo de Aplicaciones Multiplataforma.

## 📄 Licencia

Este proyecto es privado y de uso exclusivo de Inmobiliaria Leyva Illescas.

---

**Versión**: 1.0.0  
**Última actualización**: Noviembre 2024  
**Desarrollado con**: Angular 20.3, TypeScript, Tailwind CSS 4.1  
**Estado de Tests**: 36/36 pasando (100%) ✅  
**Desplegado en**: [Netlify](https://leyvaeillescas.netlify.app/)
