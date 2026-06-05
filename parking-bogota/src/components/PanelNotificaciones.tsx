import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { limpiarNotificaciones } from "../store/parqueaderoSlice";
import type { AppDispatch } from "../store/store";

const PanelNotificaciones: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const notificaciones = useSelector(
    (state: RootState) => state.parqueaderos.notificaciones
  );

  if (notificaciones.length === 0) return null;

  const colores: Record<string, string> = {
    info: "#d0eaff",
    alerta: "#ffe0e0",
    exito: "#e0ffe0",
  };

  return (
    <div style={{ position: "fixed", top: 20, right: 20, width: 300, zIndex: 999 }}>
      <h4 style={{ marginBottom: 8 }}>🔔 Notificaciones</h4>
      {notificaciones.map((n) => (
        <div
          key={n.id}
          style={{
            backgroundColor: colores[n.tipo],
            padding: "10px",
            marginBottom: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        >
          {n.mensaje}
        </div>
      ))}
      <button onClick={() => dispatch(limpiarNotificaciones())}>
        Limpiar
      </button>
    </div>
  );
};

export default PanelNotificaciones;
