export interface Casa {
  titulo: string;
  direccion: string;
  ciudad: string;
  provincia: string;
  cp: string;
  pais: string;
  lat: number;
  lng: number;
  precio: number;
  precioM2: number;
  antiguedad: number;
  tipo: string;
  plantas: number;
  metrosConstruidos: number;
  terreno: number;
  habitaciones: number;
  banos: number;
  descripcion: string;
  orientacion: string;
  anoConstruccion: number;
  estado: string;
  extras: string[];
  imagenes: string[];
}
