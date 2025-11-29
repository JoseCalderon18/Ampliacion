# Inmobiliaria Leyva Illescas

Aplicación web moderna desarrollada con Angular para la gestión y visualización de propiedades inmobiliarias. Incluye sistema de autenticación, modo oscuro/claro, filtros avanzados y diseño completamente responsive.

## 🚀 Características Principales

### ✨ Funcionalidades
- **Catálogo de Inmuebles**: Visualización de más de 40 propiedades con filtros avanzados
- **Sistema de Autenticación**: Registro e inicio de sesión con validaciones y almacenamiento local
- **Modo Oscuro/Claro**: Tema adaptable con preferencias guardadas
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Filtros Avanzados**: Búsqueda por tipo, provincia, ciudad, precio, habitaciones y baños
- **Paginación Inteligente**: Sistema de paginación responsive y optimizado
- **Galería de Imágenes**: Carruseles de imágenes en cards y páginas de detalle
- **Formulario de Contacto**: Integración con EmailJS para envío de correos

### 🎨 Páginas Disponibles
- **Home**: Página principal con galería de imágenes y características destacadas
- **Inmuebles**: Catálogo completo con filtros y paginación (grid 3x3)
- **Detalle de Inmueble**: Vista detallada de cada propiedad con galería completa
- **Historia**: Información sobre la empresa con diseño elegante
- **Postventa**: Servicios postventa disponibles
- **Contacto**: Formulario de contacto con validaciones
- **Login/Registro**: Sistema de autenticación con validaciones

## 🛠️ Tecnologías Utilizadas

- **Angular 20.3**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Tailwind CSS 4.1**: Framework de estilos utility-first
- **AOS (Animate On Scroll)**: Animaciones al hacer scroll
- **SweetAlert2**: Alertas y notificaciones personalizadas
- **EmailJS**: Servicio de envío de correos
- **RxJS**: Programación reactiva

## 📦 Instalación

### Prerrequisitos
- Node.js (v20.19 o superior, o v22.12+)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (o descargar el proyecto)
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

4. **Abrir en el navegador**
```
http://localhost:4200
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── card-home/      # Cards de características en home
│   │   ├── card-inmueble/  # Cards de propiedades
│   │   ├── card-duenio/    # Cards de fundadores
│   │   ├── cronologia/     # Componente de línea de tiempo
│   │   ├── form/           # Formulario de contacto
│   │   ├── header/         # Header con navegación
│   │   └── footer/         # Footer
│   ├── pages/              # Páginas principales
│   │   ├── home/           # Página principal
│   │   ├── inmuebles/      # Catálogo de propiedades
│   │   ├── detalle-inmueble/ # Detalle de propiedad
│   │   ├── historia/       # Historia de la empresa
│   │   ├── contacto/       # Formulario de contacto
│   │   ├── postventa/      # Servicios postventa
│   │   └── login-registro/ # Autenticación
│   ├── services/           # Servicios
│   │   ├── theme.service.ts    # Gestión de tema oscuro/claro
│   │   ├── user.service.ts     # Gestión de usuarios
│   │   └── emailService.ts     # Servicio de correos
│   └── models/             # Modelos de datos
│       └── modelCasa.ts    # Modelo de propiedad
├── controllers/            # Controladores
│   └── controladorCasas.ts # Gestión de propiedades
└── styles.css             # Estilos globales
```

## 🔐 Sistema de Autenticación

### Funcionalidades
- **Registro de usuarios**: Validación de email único y hash de contraseñas
- **Inicio de sesión**: Autenticación con email y contraseña
- **Almacenamiento local**: Datos guardados en localStorage
- **Sesión persistente**: Estado de sesión mantenido entre recargas
- **Indicador visual**: Icono en header que cambia según estado de sesión

### Almacenamiento
- Los usuarios se guardan en `localStorage` como JSON
- Las contraseñas se almacenan con hash seguro
- Email único por usuario

## 🎨 Modo Oscuro/Claro

- **Toggle en Header**: Botón para cambiar entre modos
- **Preferencias guardadas**: El modo seleccionado se guarda en localStorage
- **Diseño consistente**: Todos los componentes adaptados a ambos modos
- **Colores optimizados**: Paleta de colores específica para cada modo

## 🔍 Filtros de Inmuebles

### Filtros Disponibles
- **Tipo de Inmueble**: Casa, Piso, Chalet, etc.
- **Provincia**: Filtro por provincia
- **Ciudad**: Filtro por ciudad
- **Precio**: Rango de precio mínimo y máximo
- **Habitaciones**: Número de habitaciones
- **Baños**: Número de baños

### Características
- **Filtros múltiples**: Combinación de varios filtros simultáneamente
- **Filtros responsive**: Modal en móvil, sidebar en desktop
- **Botón limpiar**: Resetear todos los filtros
- **Contador de resultados**: Muestra cantidad de inmuebles encontrados

## 📱 Diseño Responsive

### Breakpoints
- **Móvil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- Grid de inmuebles: 1 columna (móvil) → 2 columnas (tablet) → 3 columnas (desktop)
- Filtros: Modal deslizable (móvil) → Sidebar fijo (desktop)
- Navegación: Menú hamburguesa (móvil) → Menú horizontal (desktop)
- Paginación: Botones compactos (móvil) → Paginación completa (desktop)

## 🎯 Comandos Disponibles

### Desarrollo
```bash
# Iniciar servidor de desarrollo
ng serve
npm start

# Compilar para producción
ng build

# Compilar en modo watch
ng build --watch
```

### Testing
```bash
# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e
```

## 📝 Notas Adicionales

### Datos de Prueba
- El proyecto incluye 40 propiedades de ejemplo
- Usuarios de prueba predefinidos en `user.service.ts`
- Imágenes de ejemplo en `/public/assets/img/`

### Configuración de EmailJS
Para que el formulario de contacto funcione, es necesario configurar EmailJS:
1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar las credenciales en `emailService.ts`

### Personalización
- **Colores**: Modificar en `tailwind.config.js` o usar clases de Tailwind
- **Propiedades**: Editar `controladorCasas.ts`
- **Rutas**: Configurar en `app.routes.ts`

## 🚀 Despliegue en Netlify

### Despliegue desde Git 

Esta es la mejor opción porque cada vez que hagas cambios y los subas a Git, Netlify los desplegará automáticamente.

#### Paso 1: Subir tu código a un repositorio Git

1. **Creo un repositorio en GitHub, GitLab o Bitbucket**:
   - Puede ser **público o privado** (Netlify funciona con ambos)
   - Si no tengo cuenta, la creo en [github.com](https://github.com)

2. **Inicializo Git en mi proyecto** (si aún no lo he hecho):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Conecto con mi repositorio remoto**:
```bash
git remote add origin https://github.com/JoseCalderon18/Ampliacion.git
git branch -M main
git push -u origin main
```

#### Paso 2: Conectar Netlify con mi repositorio

1. **Voy a Netlify**:
   - Visito [netlify.com](https://www.netlify.com/)
   - Inicio sesión o creo una cuenta gratuita

2. **Importo mi proyecto**:
   - Hago clic en "Add new site" → "Import an existing project"
   - Selecciono mi proveedor de Git (GitHub, GitLab o Bitbucket)
   - Autorizo a Netlify para acceder a mis repositorios
   - Selecciono mi repositorio

3. **Configuración** (Netlify detectará automáticamente):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/Ampliacion/browser`
   - **Node version**: Node 20.19 (configurado en `package.json` y `netlify.toml`)
   - El archivo `netlify.toml` ya está configurado, así que debería detectarlo automáticamente

4. **Despliegue**:
   - Hago clic en "Deploy site"
   - Netlify construirá y desplegará mi sitio automáticamente
   - ¡Listo! Mi sitio estará en línea

#### Paso 3: Despliegues automáticos

- Cada vez que hago `git push` a mi repositorio, Netlify despliega automáticamente
- Puedo ver el estado de los despliegues en el dashboard de Netlify
- Netlify me da una URL única (ej: `tu-sitio.netlify.app`)

**Ventajas**:
- ✅ Despliegue automático con cada cambio
- ✅ Historial de versiones
- ✅ Rollback fácil si algo sale mal
- ✅ Preview de pull requests
- ✅ Funciona con repositorios privados

---

### Opción Alternativa: Despliegue Manual (Sin Git)

Si prefiero no usar Git:

1. **Compilo el proyecto**:
```bash
npm run build
```

2. **Subo a Netlify**:
   - Voy a [netlify.com](https://www.netlify.com/)
   - "Add new site" → "Deploy manually"
   - Arrastro la carpeta `dist/Ampliacion/browser` a Netlify

**Nota**: Con esta opción tendré que compilar y subir manualmente cada vez que haga cambios.

## 👥 Desarrollo

Proyecto desarrollado para **Inmobiliaria Leyva Illescas** - Inmobiliaria desde 1998

## 📄 Licencia

Este proyecto es privado y de uso exclusivo de Inmobiliaria Leyva Illescas.

---

**Versión**: 1.0.0  
**Última actualización**: 2024
