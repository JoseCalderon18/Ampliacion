import { Injectable } from '@angular/core';
import { Casa } from '../app/models/modelCasa';

@Injectable({
  providedIn: 'root'
})
export class CasasController {

  private casas: Casa[] = [
    {
      titulo: "Chalet independiente ...",
      direccion: "Camino Viejo...",
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
      imagenes: [ "assets/img/chalet.jpg" ]
    },{
    titulo: "Finca de regadío con buen acceso",
    direccion: "EX384",
    ciudad: "Madrigal de la Vera",
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
    imagenes: ["assets/img/casa-BORRAR.png"]
  }
  ];

  getCasas(): Casa[] {
    return this.casas;   // 👈 debe existir este método
  }
}
