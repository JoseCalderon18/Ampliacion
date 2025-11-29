# 🚀 Guía Completa: Desplegar en Netlify

## ✅ ¿Es Gratis?

**Sí, Netlify tiene un plan gratuito** que incluye:
- ✅ 100 GB de ancho de banda por mes
- ✅ 300 minutos de build por mes
- ✅ Sitios ilimitados
- ✅ HTTPS automático
- ✅ Dominio personalizado (opcional)
- ✅ Despliegues automáticos desde Git

**Es suficiente para proyectos pequeños/medianos** como el tuyo.

---

## 📋 Paso a Paso: Desplegar tu Proyecto

### Paso 1: Asegúrate de que tu código está en GitHub

Ya tienes tu repositorio: `https://github.com/JoseCalderon18/Ampliacion`

Asegúrate de que todos tus cambios están subidos:
```bash
git add .
git commit -m "Preparado para Netlify"
git push
```

### Paso 2: Crear cuenta en Netlify

1. Ve a [netlify.com](https://www.netlify.com/)
2. Haz clic en **"Sign up"** (Registrarse)
3. Elige **"Sign up with GitHub"** (es lo más fácil)
4. Autoriza a Netlify para acceder a tus repositorios

### Paso 3: Conectar tu Repositorio

1. En el dashboard de Netlify, haz clic en **"Add new site"**
2. Selecciona **"Import an existing project"**
3. Elige **"GitHub"** como proveedor
4. Si te pide autorización, autoriza a Netlify
5. Busca y selecciona tu repositorio: **"JoseCalderon18/Ampliacion"**

### Paso 4: Configurar el Build

Netlify debería detectar automáticamente Angular gracias al archivo `netlify.toml`, pero verifica:

- **Build command**: `npm run build`
- **Publish directory**: `dist/Ampliacion/browser`
- **Node version**: 18 (o superior)

Si no aparece automáticamente, ingrésalo manualmente.

### Paso 5: Desplegar

1. Haz clic en **"Deploy site"**
2. Espera a que Netlify construya tu proyecto (puede tardar 2-5 minutos la primera vez)
3. ¡Listo! Tu sitio estará en línea con una URL como: `ampliacion-xxxxx.netlify.app`

### Paso 6: Personalizar la URL (Opcional)

1. Ve a **Site settings** → **Change site name**
2. Cambia el nombre a algo como: `inmobiliaria-leyva-illescas`
3. Tu URL será: `inmobiliaria-leyva-illescas.netlify.app`

---

## ✅ ¿Qué Funciones Funcionarán?

### ✅ Funciones que SÍ funcionan perfectamente:

1. **✅ Todas las páginas y navegación**
   - Home, Inmuebles, Historia, Contacto, etc.
   - Routing de Angular funciona perfectamente

2. **✅ Modo oscuro/claro**
   - Se guarda en localStorage del navegador
   - Funciona 100%

3. **✅ Sistema de autenticación**
   - Login/Registro funciona
   - Los usuarios se guardan en localStorage del navegador
   - **Nota**: Los datos son por navegador (no compartidos entre dispositivos)

4. **✅ Filtros de inmuebles**
   - Todos los filtros funcionan
   - Paginación funciona

5. **✅ Galerías de imágenes**
   - Carruseles funcionan
   - Imágenes se cargan desde `/assets/img/`

6. **✅ Diseño responsive**
   - Funciona en móvil, tablet y desktop

### ⚠️ Funciones que requieren configuración:

1. **📧 Formulario de Contacto (EmailJS)**
   - **Funciona**, pero necesitas verificar que EmailJS esté configurado
   - Las credenciales ya están en el código, así que debería funcionar
   - Si no funciona, verifica en [EmailJS Dashboard](https://dashboard.emailjs.com/)

### ❌ Limitaciones del Plan Gratis:

1. **Almacenamiento de usuarios**:
   - Los usuarios se guardan en `localStorage` del navegador
   - Cada usuario solo verá sus datos en su navegador
   - No hay base de datos compartida (esto es normal para el plan gratis)

2. **Límites de build**:
   - 300 minutos de build por mes (suficiente para ~100-150 despliegues)
   - Si te quedas sin minutos, espera al mes siguiente o actualiza el plan

---

## 🔄 Despliegues Automáticos

Una vez configurado, cada vez que hagas:

```bash
git add .
git commit -m "Nuevo cambio"
git push
```

Netlify automáticamente:
1. Detectará el cambio
2. Construirá tu proyecto
3. Desplegará la nueva versión
4. Te notificará por email (opcional)

---

## 🛠️ Solución de Problemas

### Si el build falla:

1. Ve a **Deploys** en Netlify
2. Haz clic en el deploy fallido
3. Revisa los logs para ver el error
4. Errores comunes:
   - **Node version**: Asegúrate de usar Node 18+
   - **Dependencias**: Verifica que `package.json` esté completo
   - **Rutas**: Verifica que `netlify.toml` esté correcto

### Si las imágenes no cargan:

- Verifica que las rutas en el código sean relativas: `/assets/img/...`
- Asegúrate de que las imágenes estén en `public/assets/img/`

### Si el routing no funciona:

- El archivo `public/_redirects` ya está configurado
- Si no funciona, verifica que esté en la carpeta `public/`

---

## 📊 Monitoreo

En el dashboard de Netlify puedes ver:
- ✅ Estado de los despliegues
- ✅ Logs de build
- ✅ Analytics (visitas, etc.) - función premium
- ✅ Form submissions (si configuras formularios de Netlify)

---

## 🎯 Resumen

**Sí, Netlify es gratis y perfecto para tu proyecto.**

**Funciones que funcionan al 100%:**
- ✅ Todas las páginas
- ✅ Modo oscuro/claro
- ✅ Autenticación (localStorage)
- ✅ Filtros y búsqueda
- ✅ Galerías
- ✅ Diseño responsive

**Lo único a tener en cuenta:**
- Los usuarios se guardan en localStorage (por navegador)
- EmailJS debería funcionar (ya está configurado)

**¿Listo para desplegar?** Sigue los pasos de arriba y en 5 minutos tendrás tu sitio en línea. 🚀

