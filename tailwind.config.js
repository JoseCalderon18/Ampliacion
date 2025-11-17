module.exports = {
  content: [
    './src/**/*.{html,ts}',  // Asegúrate de incluir todos los archivos .html y .ts
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')  // Agregar el plugin de animaciones
  ],
}
