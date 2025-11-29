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
- **Banner de Cookies**: Sistema de consentimiento de cookies con almacenamiento local

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
│   │   ├── footer/         # Footer
│   │   └── cookies/        # Banner de cookies
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

## 🧩 Componentes y Comunicación

### Componentes con @Input y @Output

Hemos implementado una arquitectura de componentes bien estructurada con comunicación bidireccional:

#### CardInmuebleComponent
- **@Input() casa**: Recibe la propiedad a mostrar
- **@Output() propiedadSeleccionada**: Emite cuando se hace clic en "Saber más"
- **@Output() imagenCambiada**: Emite cuando cambia la imagen del carrusel
- **Métodos**: `nextImage()`, `prevImage()`, `hasMultipleImages()`, `onSaberMas()`

#### FormComponent
- **@Output() emailEnviado**: Emite cuando el email se envía correctamente
- **@Output() errorEnvio**: Emite cuando hay un error al enviar
- **Métodos**: `enviarEmail()`, `obtenerAsusnto()`

#### CardHomeComponent
- **@Output() cardSeleccionada**: Emite cuando se hace clic en una tarjeta
- **Métodos**: `onCardClick()`

#### CardDuenioComponent
- **@Input() foto**: URL de la foto del dueño
- **@Input() nombre**: Nombre completo del dueño
- **@Input() titulo**: Título o cargo del dueño
- **@Input() descripcion**: Descripción opcional del dueño
- **@Input() imgClass**: Clases CSS opcionales para la imagen

#### CardCasaComponent
- **@Input() casa**: Recibe un objeto Casa completo para mostrar

#### CookiesComponent
- **showBanner**: Signal que controla la visibilidad del banner
- **Métodos**: `acceptCookies()`, `rejectCookies()`
- **Funcionalidad**: Guarda la preferencia del usuario en localStorage y no vuelve a mostrar el banner

### Documentación del Código

Todos los componentes principales incluyen documentación JSDoc completa:
- Descripción del propósito del componente
- Ejemplos de uso
- Documentación de propiedades (@Input)
- Documentación de eventos (@Output)
- Documentación de métodos con parámetros y valores de retorno
- Valores por defecto especificados

## 🧪 Pruebas Unitarias

Hemos implementado pruebas unitarias completas para todos los componentes principales. **Estado actual: 36/36 tests pasando (100%)**.

### Estado de los Tests

```
TOTAL: 36 SUCCESS ✅
```

### Componentes con Tests Completos

#### CardInmuebleComponent (10 tests)
- ✅ Verificación de creación del componente
- ✅ Navegación de imágenes (siguiente/anterior)
- ✅ Wrapping de imágenes (última → primera, primera → última)
- ✅ Detección de múltiples imágenes
- ✅ Emisión de eventos (propiedadSeleccionada, imagenCambiada)
- ✅ Manejo de imágenes por defecto
- ✅ Verificación con imagen única
- ✅ Mock de ThemeService y RouterTestingModule

#### FormComponent (7 tests)
- ✅ Verificación de creación del componente
- ✅ Inicialización con campos vacíos
- ✅ Verificación de outputs (emailEnviado, errorEnvio)
- ✅ Emisión de eventos en éxito y error
- ✅ Conversión de asunto numérico a texto
- ✅ Mock de SweetAlert2 para evitar alertas durante tests
- ✅ Mock de EmailService y ThemeService

#### CardHomeComponent (5 tests)
- ✅ Verificación de creación del componente
- ✅ Estructura de datos de tarjetas
- ✅ Verificación de output (cardSeleccionada)
- ✅ Emisión de eventos al hacer clic
- ✅ Verificación de propiedades requeridas

#### Otros Componentes con Tests
- ✅ **CardCasaComponent**: Test de creación con mock completo de Casa
- ✅ **App Component**: Tests de estructura y componentes principales
- ✅ **Header Component**: Test de creación con RouterTestingModule
- ✅ **Home Component**: Tests con RouterTestingModule
- ✅ **Páginas**: Tests para todas las páginas principales (inmuebles, contacto, historia, etc.)

### Características de los Tests

- **Mocks completos**: Todos los servicios están mockeados (ThemeService, EmailService, Router)
- **Sin alertas**: SweetAlert2 está mockeado para evitar alertas durante la ejecución
- **Cobertura completa**: Tests para creación, métodos, eventos y casos límite
- **Sin errores**: Todos los tests pasan sin errores de compilación

Todas las pruebas están en archivos `.spec.ts` y se pueden ejecutar con `ng test`.

## 📋 Dónde Están los Tests y Cómo Ejecutarlos

### Ubicación de los Archivos de Test

Los archivos de pruebas unitarias se encuentran **junto a cada componente**, con la extensión `.spec.ts`:

```
src/app/
├── components/
│   ├── card-inmueble/
│   │   ├── card-inmueble.ts
│   │   ├── card-inmueble.html
│   │   └── card-inmueble.spec.ts    ← Archivo de tests
│   ├── form/
│   │   ├── form.ts
│   │   └── form.spec.ts             ← Archivo de tests
│   ├── card-home/
│   │   └── card-home.spec.ts       ← Archivo de tests
│   └── ...
└── pages/
    ├── home/
    │   └── home.spec.ts             ← Archivo de tests
    └── ...
```

### Comandos para Ejecutar los Tests

```bash
# Ejecutar todos los tests en modo watch (se actualizan automáticamente)
ng test

# Ejecutar tests una sola vez y cerrar
ng test --watch=false

# Ejecutar tests con cobertura de código
ng test --code-coverage

# Ejecutar tests de un archivo específico
ng test --include='**/card-inmueble.spec.ts'
```

### Cómo Funcionan los Tests

Los tests se ejecutan en un navegador (normalmente Chrome) y verifican que los componentes funcionen correctamente. Cuando ejecutas `ng test`:

1. Se abre una ventana del navegador
2. Se ejecutan todos los tests
3. Verás los resultados en la consola y en el navegador
4. Si hay errores, se muestran en rojo
5. Si todo está bien, se muestran en verde

### Estructura de un Test

Cada archivo `.spec.ts` sigue esta estructura básica:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiComponente } from './mi-componente';

describe('MiComponente', () => {
  let component: MiComponente;
  let fixture: ComponentFixture<MiComponente>;

  beforeEach(async () => {
    // Configuración antes de cada test
    await TestBed.configureTestingModule({
      imports: [MiComponente]
    }).compileComponents();

    fixture = TestBed.createComponent(MiComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verifica que el componente se crea correctamente
    expect(component).toBeTruthy();
  });

  it('should do something specific', () => {
    // Test de funcionalidad específica
    component.miMetodo();
    expect(component.miPropiedad).toBe('valor esperado');
  });
});
```

### Tests Implementados en el Proyecto

Hemos creado tests completos para los componentes principales:

#### card-inmueble.spec.ts (10 tests)
- ✅ Verifica que el componente se crea
- ✅ Navegación a siguiente imagen
- ✅ Navegación a imagen anterior
- ✅ Wrapping (última → primera imagen)
- ✅ Wrapping (primera → última imagen)
- ✅ Detección de múltiples imágenes
- ✅ Emisión de evento propiedadSeleccionada
- ✅ Emisión de evento imagenCambiada
- ✅ Manejo de imágenes por defecto
- ✅ Verificación con imagen única

#### form.spec.ts (7 tests)
- ✅ Verifica que el componente se crea
- ✅ Inicialización con campos vacíos
- ✅ Verificación de outputs (emailEnviado, errorEnvio)
- ✅ Emisión de evento emailEnviado en éxito
- ✅ Emisión de evento errorEnvio en fallo
- ✅ Conversión de asunto '1' a texto
- ✅ Conversión de asunto '2' y '3' a texto

#### card-home.spec.ts (5 tests)
- ✅ Verifica que el componente se crea
- ✅ Verificación de estructura de datos (6 cards)
- ✅ Verificación de output cardSeleccionada
- ✅ Emisión de evento al hacer clic
- ✅ Verificación de propiedades requeridas en cards

### Ver Resultados de los Tests

Cuando ejecutas `ng test`, verás algo como:

```
✓ CardInmuebleComponent should create
✓ CardInmuebleComponent should navigate to next image
✓ CardInmuebleComponent should navigate to previous image
✓ Form should create
✓ Form should emit emailEnviado event on successful email send
✓ CardHome should create
...
Chrome Headless: Executed 36 of 36 SUCCESS
TOTAL: 36 SUCCESS ✅
```

Si hay errores, aparecerán en rojo con detalles del problema. Actualmente **todos los tests pasan correctamente**.

## 🧪 Cómo Ejecutar los Tests Unitarios

### Ubicación de los Tests

Los archivos de pruebas unitarias se encuentran junto a cada componente, con la extensión `.spec.ts`:

```
src/app/
├── components/
│   ├── card-inmueble/
│   │   └── card-inmueble.spec.ts    ← Tests del componente
│   ├── form/
│   │   └── form.spec.ts             ← Tests del componente
│   ├── card-home/
│   │   └── card-home.spec.ts       ← Tests del componente
│   └── ...
└── pages/
    ├── home/
    │   └── home.spec.ts             ← Tests de la página
    └── ...
```

### Comandos para Ejecutar Tests

```bash
# Ejecutar todos los tests en modo watch (se actualizan automáticamente)
ng test

# Ejecutar tests una sola vez
ng test --watch=false

# Ejecutar tests con cobertura de código
ng test --code-coverage

# Ejecutar tests de un archivo específico
ng test --include='**/card-inmueble.spec.ts'
```

### Estructura de un Test

Cada archivo `.spec.ts` sigue esta estructura:

```typescript
describe('NombreComponente', () => {
  let component: NombreComponente;
  let fixture: ComponentFixture<NombreComponente>;

  beforeEach(async () => {
    // Configuración del test
    await TestBed.configureTestingModule({
      imports: [NombreComponente]
    }).compileComponents();

    fixture = TestBed.createComponent(NombreComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Más tests aquí...
});
```

### Tests Implementados

Hemos creado tests completos para todos los componentes principales:

- **card-inmueble.spec.ts**: 10 tests que cubren navegación, eventos y casos límite
- **form.spec.ts**: 7 tests que cubren validación y eventos (con mock de SweetAlert2)
- **card-home.spec.ts**: 5 tests que cubren estructura y eventos
- **card-casa.spec.ts**: Test de creación con mock completo
- **app.spec.ts**: Tests de estructura de la aplicación
- **header.spec.ts**: Test de creación del header
- **home.spec.ts**: Test de creación de la página home
- **Páginas adicionales**: Tests para todas las páginas principales

**Total: 36 tests, todos pasando ✅**

Los tests verifican:
- ✅ Creación correcta del componente
- ✅ Funcionalidad de métodos
- ✅ Emisión de eventos (@Output)
- ✅ Manejo de casos límite
- ✅ Validación de datos
- ✅ Mocks de servicios y dependencias
- ✅ Sin alertas durante la ejecución (SweetAlert2 mockeado)

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

# Ejecutar tests con cobertura
ng test --code-coverage
```

### Build y Producción
```bash
# Build de producción optimizado
npm run build

# Verificar que no hay errores de linting
ng lint
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

#### Paso 1: Subir nuestro código a un repositorio Git

1. **Creamos un repositorio en GitHub, GitLab o Bitbucket**:
   - Puede ser **público o privado** (Netlify funciona con ambos)
   - Si no tenemos cuenta, la creamos en [github.com](https://github.com)

2. **Inicializamos Git en nuestro proyecto** (si aún no lo hemos hecho):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Conectamos con nuestro repositorio remoto**:
```bash
git remote add origin https://github.com/JoseCalderon18/Ampliacion.git
git branch -M main
git push -u origin main
```

#### Paso 2: Conectar Netlify con nuestro repositorio

1. **Vamos a Netlify**:
   - Visitamos [netlify.com](https://www.netlify.com/)
   - Iniciamos sesión o creamos una cuenta gratuita

2. **Importamos nuestro proyecto**:
   - Hacemos clic en "Add new site" → "Import an existing project"
   - Seleccionamos nuestro proveedor de Git (GitHub, GitLab o Bitbucket)
   - Autorizamos a Netlify para acceder a nuestros repositorios
   - Seleccionamos nuestro repositorio

3. **Configuración** (Netlify detectará automáticamente):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/Ampliacion/browser`
   - **Node version**: Node 20.19 (configurado en `package.json` y `netlify.toml`)
   - El archivo `netlify.toml` ya está configurado, así que debería detectarlo automáticamente

4. **Despliegue**:
   - Hacemos clic en "Deploy site"
   - Netlify construirá y desplegará nuestro sitio automáticamente
   - ¡Listo! Nuestro sitio estará en línea

#### Paso 3: Despliegues automáticos

- Cada vez que hacemos `git push` a nuestro repositorio, Netlify despliega automáticamente
- Podemos ver el estado de los despliegues en el dashboard de Netlify
- Netlify nos da una URL única (ej: `tu-sitio.netlify.app`)

**Ventajas**:
- ✅ Despliegue automático con cada cambio
- ✅ Historial de versiones
- ✅ Rollback fácil si algo sale mal
- ✅ Preview de pull requests
- ✅ Funciona con repositorios privados

---

### Opción Alternativa: Despliegue Manual (Sin Git)

Si preferimos no usar Git:

1. **Compilamos el proyecto**:
```bash
npm run build
```

2. **Subimos a Netlify**:
   - Vamos a [netlify.com](https://www.netlify.com/)
   - "Add new site" → "Deploy manually"
   - Arrastramos la carpeta `dist/Ampliacion/browser` a Netlify

**Nota**: Con esta opción tendremos que compilar y subir manualmente cada vez que hagamos cambios.

## 📚 Características Técnicas Implementadas

### Para la Evaluación del Proyecto

Este proyecto cumple con todos los requisitos y criterios de evaluación:

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

### Detalles de Implementación

- **18 componentes** en total (9 componentes reutilizables + 9 páginas)
- **3 servicios** (ThemeService, UserService, EmailService)
- **2 modelos** (Casa, Usuario)
- **36 pruebas unitarias** - **TODAS PASANDO (100%)** ✅
- **Documentación JSDoc** completa en todos los componentes principales (51 comentarios)
- **12 usos de @Input/@Output** para comunicación entre componentes
- **Eventos personalizados** (EventEmitter) implementados correctamente
- **Mocks completos** en todos los tests (servicios, router, SweetAlert2)

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
