import { Injectable } from '@angular/core';
import { Inmueble } from '../app/models/inmuebleModelo';

@Injectable({
  providedIn: 'root'
})
export class InmuebleControlador {

  private inmuebles: Inmueble[] = [
    {
      direccion: "Camino Viejo",
      ciudad: "Talavera",
      provincia: "Toledo",
      cp: "45600",
      precio: 295000,
      tipo: "Independiente",
      plantas: 1,
      habitaciones: 5,
      descripcion: "Finca de 1 ha...",
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
    },
    {
      direccion: "Madrigal de la Vera",
      ciudad: "Extremadura",
      provincia: "Cáceres",
      cp: "10400",
      precio: 150000,
      tipo: "Finca",
      plantas: 0,
      habitaciones: 0,
      descripcion: "Finca de regadío con buen acceso en zona de vega, llana, vallada y con luz. Edificabilidad permitida de vivienda unifamiliar aislada supeditada a explotación agropecuaria.",
      anoConstruccion: 0,
      estado: "Parcela disponible",
      extras: ["Agua corriente disponible", "Electricidad disponible", "Jardines"],
      imagenes: [
        "assets/img/casa-BORRAR.png",
        "assets/img/casa-BORRAR.png",
        "assets/img/casa-BORRAR.png"
      ]
    },
    {
      direccion: "Privada",
      ciudad: "Candeleda",
      provincia: "Ávila",
      cp: "5480",
      precio: 60000,
      tipo: "Adosado",
      plantas: 3,
      habitaciones: 5,
      descripcion: "Casa adosada para reformar de 135 m² con salón, cocina, 5 dormitorios, 2 baños y patio. Ubicada cerca de centros comerciales, colegios, zonas verdes y transporte urbano. Incluye trastero y chimenea.",
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
    },
    {
      direccion: "EX 203",
      ciudad: "Villanueva de la Vera",
      provincia: "Cáceres",
      cp: "10470",
      precio: 159000,
      tipo: "Finca",
      plantas: 1,
      habitaciones: 2,
      descripcion: "Finca de 12.000 m² en zona de montaña, con vivienda escriturada de 75 m², piscina de 16x8 m con depuradora, 2 pozos, luz, caseta de aperos grande, vallada y con buen acceso. Vistas a la sierra y posibilidad de ampliación.",
      anoConstruccion: 0,
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
    },
    {
      direccion: "Corredera del Cristo, 28",
      ciudad: "Talavera de la Reina",
      provincia: "Toledo",
      cp: "45600",
      precio: 120000,
      tipo: "Local comercial",
      plantas: 1,
      habitaciones: 0,
      descripcion: "Local en casco antiguo de 70 m² con agua y luz. Es cuadrado, muy bien situado frente al mercado de Abastos. Tiene 3 estancias hechas con pladur que se pueden quitar y dejar el espacio diáfano.",
      anoConstruccion: 0,
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

  getInmuebles(): Inmueble[] {
    return this.inmuebles;
  }
}