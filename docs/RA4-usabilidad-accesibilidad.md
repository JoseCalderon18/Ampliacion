# RA4 - Usabilidad y accesibilidad

## Proyecto

Aplicacion web inmobiliaria desarrollada con Angular. La interfaz permite consultar inmuebles, filtrar resultados, ver detalles, contactar con la empresa, iniciar sesion y registrarse.

## Accesibilidad

### 1. Imagenes, contraste, tamanos y espaciados

- Las imagenes principales de inmuebles incluyen texto alternativo descriptivo basado en el titulo del inmueble.
- La galeria de detalle incluye texto alternativo en imagen principal y miniaturas.
- Se emplean colores de alto contraste en textos principales, botones y estados de modo oscuro.
- Los tamanos de texto son responsivos y se evita texto excesivamente pequeno en elementos principales.
- Los espacios entre bloques, formularios, filtros y cards permiten lectura clara y reducen errores de interaccion.
- Se ha anadido una regla global `:focus-visible` para que el foco del teclado sea visible.
- Se respeta `prefers-reduced-motion` para reducir animaciones cuando el usuario lo solicita desde el sistema.

### 2. Navegacion por teclado y propiedades ARIA

- Se ha incorporado un enlace de salto al contenido principal para usuarios de teclado y lectores de pantalla.
- El contenido principal usa `id="contenido-principal"` y puede recibir foco.
- El menu movil informa de su estado mediante `aria-expanded` y referencia el panel con `aria-controls`.
- Las navegaciones principal y movil tienen `aria-label`.
- El panel de filtros movil se declara como dialogo con `role="dialog"` y `aria-modal="true"`.
- Los acordeones de filtros informan de apertura/cierre con `aria-expanded`.
- El contador de resultados usa `role="status"` y `aria-live="polite"` para anunciar cambios sin interrumpir.
- Los botones de carrusel y galeria tienen nombres accesibles.

### 3. Formularios y lectores de pantalla

- El formulario de contacto tiene etiquetas `label` asociadas a cada campo.
- Los campos obligatorios del formulario de contacto usan `required` y `aria-required`.
- Los campos de login y registro tienen etiquetas asociadas mediante `for` e `id`.
- Se han incluido atributos `autocomplete` adecuados: nombre, apellidos, email, telefono y contrasenas.
- Los mensajes de error de login y registro usan `role="alert"` para que puedan ser anunciados por lectores de pantalla.
- El enlace de recuperacion de contrasena evita `href="#"` y dirige a la pagina de contacto.

### 4. Subtitulos y transcripciones para medios audiovisuales

La aplicacion no incorpora videos ni audios propios. Por ese motivo no hay pistas de subtitulos que implementar. Si en una version posterior se anaden videos promocionales o visitas virtuales, se incluiran:

- Subtitulos sincronizados en formato WebVTT.
- Transcripcion textual completa junto al contenido audiovisual.
- Controles nativos o accesibles para reproducir, pausar y ajustar volumen.

## Usabilidad

### 1. Cabecera, pie de pagina y menus

- La cabecera mantiene navegacion principal visible en escritorio.
- En movil se usa menu desplegable con boton dedicado y estado accesible.
- El pie de pagina agrupa enlaces de exploracion, recursos legales y redes sociales.
- Los enlaces de redes sociales tienen nombres accesibles mediante `aria-label`.

### 2. Navegacion entre secciones

- La aplicacion usa Angular Router para navegar entre Home, Inmuebles, Detalle, Historia, Clientes, Contacto, Privacidad, Terminos y Login/Registro.
- Las rutas principales son accesibles desde la cabecera y/o el pie de pagina.
- Las fichas de inmuebles tienen llamada a la accion para acceder al detalle.
- La pagina de detalle incluye enlace de vuelta al listado.

### 3. Visualizacion, busqueda, filtrado y operaciones con objetos

- Los inmuebles se muestran en cards con imagen, tipo, precio, ubicacion y caracteristicas.
- Se incluyen filtros por tipo, provincia, ciudad, precio, habitaciones y banos.
- Los filtros funcionan en escritorio como panel lateral y en movil como panel modal.
- La interfaz informa del numero de resultados mostrados.
- La paginacion permite recorrer resultados sin saturar la pantalla.

### 4. Formularios, contenido y legibilidad

- Los formularios separan claramente campos, etiquetas, placeholders y acciones principales.
- El formulario de contacto explica la finalidad de la comunicacion.
- Login y registro tienen vistas diferenciadas para evitar confusion.
- La informacion de contacto, horarios y ubicacion se presenta en bloques escaneables.
- El mapa embebido tiene `title` descriptivo.

## Evidencias tecnicas

- Compilacion: `npm run build`.
- Pruebas unitarias: `npx ng test --watch=false --browsers=ChromeHeadless`.
- Archivos principales revisados:
  - `src/app/app.html`
  - `src/styles.css`
  - `src/app/components/header/header.html`
  - `src/app/components/form/form.html`
  - `src/app/pages/inmuebles/inmuebles.html`
  - `src/app/pages/login-registro/login-registro.html`
  - `src/app/pages/contacto/contacto.html`
  - `src/app/components/card-inmueble/card-inmueble.html`

## Conclusion

Con estas medidas, el proyecto cubre los criterios principales de RA4: accesibilidad perceptible, navegacion por teclado, formularios comprensibles, estructura usable, filtrado de objetos y documentacion justificativa de las decisiones tomadas.
