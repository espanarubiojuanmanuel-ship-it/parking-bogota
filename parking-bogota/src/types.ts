export interface Parqueadero {
  id: number;
  nombre: string;
  direccion: string;
  espaciosDisponibles: number;
  espaciosTotales: number;
  tipo: string;
  tarifa: number;
}

export interface Notificacion {
  id: number;
  mensaje: string;
  tipo: "info" | "alerta" | "exito";
}
