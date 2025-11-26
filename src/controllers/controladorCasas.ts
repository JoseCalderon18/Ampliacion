import { Injectable } from '@angular/core';
import { Casa } from '../app/models/modelCasa';

@Injectable({
  providedIn: 'root'
})
export class CasasController {

  private casas: Casa[] = [
    {
      titulo: "Chalet independiente",
      direccion: "Camino Viejo",
      ciudad: "Talavera",
      provincia: "Toledo",
      cp: "45600",
      pais: "España",
      lat: 39.95851,
      lng: -4.83256,
      precio: 295000,
      precioM2: 1475,
      antiguedad: 9,
      tipo: "Independiente",
      plantas: 1,
      metrosConstruidos: 200,
      terreno: 10000,
      habitaciones: 5,
      banos: 3,
      descripcion: "Finca de 1 ha...",
      orientacion: "Sur",
      anoConstruccion: 1980,
      estado: "Buena conservación",
      extras: [ "Piscina", "Jardín" ],
      imagenes: [
  "assets/img/Chalet independiente/foto1.jpg",
  "assets/img/Chalet independiente/foto2.jpg",
  "assets/img/Chalet independiente/foto3.jpg",
  "assets/img/Chalet independiente/foto4.jpg",
  "assets/img/Chalet independiente/foto5.jpg",
  "assets/img/Chalet independiente/foto6.jpg",
  "assets/img/Chalet independiente/foto7.jpg",
  "assets/img/Chalet independiente/foto8.jpg",
  "assets/img/Chalet independiente/foto9.jpg",
  "assets/img/Chalet independiente/foto10.jpg",
  "assets/img/Chalet independiente/foto11.jpg",
  "assets/img/Chalet independiente/foto12.jpg",
  "assets/img/Chalet independiente/foto13.jpg",
  "assets/img/Chalet independiente/foto14.jpg",
  "assets/img/Chalet independiente/foto15.jpg",
  "assets/img/Chalet independiente/foto16.jpg",
  "assets/img/Chalet independiente/foto17.jpg",
  "assets/img/Chalet independiente/foto18.jpg",
  "assets/img/Chalet independiente/foto19.jpg",
  "assets/img/Chalet independiente/foto20.jpg",
  "assets/img/Chalet independiente/foto21.jpg",
  "assets/img/Chalet independiente/foto22.jpg",
  "assets/img/Chalet independiente/foto23.jpg",
  "assets/img/Chalet independiente/foto24.jpg",
  "assets/img/Chalet independiente/foto25.jpg",
  "assets/img/Chalet independiente/foto26.jpg",
  "assets/img/Chalet independiente/foto27.jpg",
  "assets/img/Chalet independiente/foto28.jpg"
]
    },{
    titulo: "Finca de regadío con buen acceso",
    direccion: "Madrigal de la Vera",
    ciudad: "Extremadura",
    provincia: "Cáceres",
    cp: "10400",
    pais: "España",
    lat: 40.10123, // Latitud aproximada, se puede ajustar
    lng: -5.63645, // Longitud aproximada, se puede ajustar
    precio: 150000,
    precioM2: 150000 / 35000, // Precio por m² calculado
    antiguedad: 0, // No especificada
    tipo: "Finca",
    plantas: 0, // No hay vivienda construida todavía
    metrosConstruidos: 0, // No hay vivienda construida todavía
    terreno: 35000,
    habitaciones: 0, // No aplica
    banos: 0, // No aplica
    descripcion: "Finca de regadío con buen acceso en zona de vega, llana, vallada y con luz. Edificabilidad permitida de vivienda unifamiliar aislada supeditada a explotación agropecuaria.",
    orientacion: "N/A",
    anoConstruccion: 0, // No aplica
    estado: "Parcela disponible",
    extras: ["Agua corriente disponible", "Electricidad disponible", "Jardines"],
    imagenes: ["assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png"]
  },{
  titulo: "Casa adosada para reformar",
  direccion: "Privada", // No se especifica en el anuncio
  ciudad: "Candeleda",
  provincia: "Ávila",
  cp: "5480",
  pais: "España",
  lat: 40.15581,
  lng: -5.23983,
  precio: 60000,
  precioM2: 444,
  antiguedad: 2025 - 1945, // 80 años aprox.
  tipo: "Adosado",
  plantas: 3,
  metrosConstruidos: 135,
  terreno: 73,
  habitaciones: 5,
  banos: 2,
  descripcion: "Casa adosada para reformar de 135 m² con salón, cocina, 5 dormitorios, 2 baños y patio. Ubicada cerca de centros comerciales, colegios, zonas verdes y transporte urbano. Incluye trastero y chimenea.",
  orientacion: "N/A",
  anoConstruccion: 1945,
  estado: "A reformar",
  extras: [
    "Patio",
    "Trastero",
    "Chimenea",
    "Instalaciones deportivas",
    "Centros comerciales",
    "Colegios",
    "Zonas verdes",
    "Autobús urbano"
  ],
  imagenes: [
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png"
  ]
},{
  titulo: "Finca con vivienda y piscina",
  direccion: "EX 203",
  ciudad: "Villanueva de la Vera",
  provincia: "Cáceres",
  cp: "10470",
  pais: "España",
  lat: 40.13115,
  lng: -5.46305,
  precio: 159000,
  precioM2: 2120,
  antiguedad: 0, // No se indica año de construcción
  tipo: "Finca",
  plantas: 1,
  metrosConstruidos: 75,
  terreno: 12000,
  habitaciones: 2,
  banos: 1,
  descripcion: "Finca de 12.000 m² en zona de montaña, con vivienda escriturada de 75 m², piscina de 16x8 m con depuradora, 2 pozos, luz, caseta de aperos grande, vallada y con buen acceso. Vistas a la sierra y posibilidad de ampliación.",
  orientacion: "N/A",
  anoConstruccion: 0, // No se especifica
  estado: "Buena conservación",
  extras: [
    "Piscina",
    "Jardines",
    "2 pozos",
    "Caseta de aperos",
    "Vallada",
    "Buen acceso",
    "Agua corriente disponible",
    "Electricidad disponible",
    "Colegios",
    "Centros deportivos",
    "Autobús urbano"
  ],
  imagenes: [
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png"
  ]
},{
  titulo: "Local en venta",
  direccion: "Corredera del Cristo, 28",
  ciudad: "Talavera de la Reina",
  provincia: "Toledo",
  cp: "45600",
  pais: "España",
  lat: 39.96015,
  lng: -4.83297,
  precio: 120000,
  precioM2: 1714, // 120000 / 70
  antiguedad: 0, // No se indica año de construcción
  tipo: "Local comercial",
  plantas: 1,
  metrosConstruidos: 70,
  terreno: 0, // No aplica en locales
  habitaciones: 0, // No aplica
  banos: 1, // 1 aseo
  descripcion: "Local en casco antiguo de 70 m² con agua y luz. Es cuadrado, muy bien situado frente al mercado de Abastos. Tiene 3 estancias hechas con pladur que se pueden quitar y dejar el espacio diáfano.",
  orientacion: "N/A",
  anoConstruccion: 0, // No se especifica
  estado: "Buena conservación",
  extras: [
    "1 escaparate",
    "3 estancias desmontables",
    "Instalación de agua",
    "Instalación eléctrica",
    "Cierres"
  ],
  imagenes: [
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png" // Puedes cambiarlo por la ruta correcta
  ]
},{
  titulo: "Local en venta en Talavera de la Reina",
  direccion: "Corredera del Cristo, 28",
  ciudad: "Talavera de la Reina",
  provincia: "Toledo",
  cp: "45600",
  pais: "España",
  lat: 39.96015,
  lng: -4.83297,
  precio: 120000,
  precioM2: 1714, // 120000 / 70
  antiguedad: 0, // No especificado
  tipo: "Local comercial",
  plantas: 1,
  metrosConstruidos: 70,
  terreno: 0, // No aplica
  habitaciones: 0, // No aplica
  banos: 1, // 1 aseo
  descripcion: "Local en casco antiguo de 70 m² con agua y luz. Es cuadrado, muy bien situado frente al mercado de Abastos. Tiene 3 estancias hechas con pladur que se pueden quitar y dejar el espacio diáfano.",
  orientacion: "N/A",
  anoConstruccion: 0, // No especificado
  estado: "Buena conservación",
  extras: [
    "1 escaparate",
    "3 estancias desmontables",
    "Instalación de agua",
    "Instalación eléctrica",
    "Cierres"
  ],
  imagenes: [
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png",
    "assets/img/casa-BORRAR.png"
  ]
}



  ];

  getCasas(): Casa[] {
    return this.casas;   // 👈 debe existir este método
  }
}
