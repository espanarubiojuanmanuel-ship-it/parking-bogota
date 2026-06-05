import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Parqueadero, Notificacion } from "../types";

interface ParqueaderoState {
  parqueaderos: Parqueadero[];
  notificaciones: Notificacion[];
  cargando: boolean;
  error: string | null;
}

const estadoInicial: ParqueaderoState = {
  parqueaderos: [],
  notificaciones: [],
  cargando: false,
  error: null,
};

export const obtenerParqueaderos = createAsyncThunk(
  "parqueaderos/obtener",
  async () => {
    const respuesta = await axios.get<Parqueadero[]>(
      "http://127.0.0.1:8000/api/parqueaderos"
    );
    return respuesta.data;
  }
);

const parqueaderoSlice = createSlice({
  name: "parqueaderos",
  initialState: estadoInicial,
  reducers: {
    agregarNotificacion: (state, action) => {
      state.notificaciones.push(action.payload);
    },
    limpiarNotificaciones: (state) => {
      state.notificaciones = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtenerParqueaderos.pending, (state) => {
        state.cargando = true;
        state.error = null;
      })
      .addCase(obtenerParqueaderos.fulfilled, (state, action) => {
        state.cargando = false;
        state.parqueaderos = action.payload;
        state.notificaciones.push({
          id: Date.now(),
          mensaje: "Parqueaderos cargados correctamente",
          tipo: "exito",
        });
      })
      .addCase(obtenerParqueaderos.rejected, (state, action) => {
        state.cargando = false;
        state.error = action.error.message ?? "Error desconocido";
        state.notificaciones.push({
          id: Date.now(),
          mensaje: "Error al cargar los parqueaderos",
          tipo: "alerta",
        });
      });
  },
});

export const { agregarNotificacion, limpiarNotificaciones } =
  parqueaderoSlice.actions;
export default parqueaderoSlice.reducer;