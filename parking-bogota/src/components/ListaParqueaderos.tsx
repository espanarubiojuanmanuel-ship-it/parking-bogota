import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { obtenerParqueaderos } from "../store/parqueaderoSlice";

const ListaParqueaderos: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { parqueaderos, cargando, error } = useSelector(
    (state: RootState) => state.parqueaderos
  );

  useEffect(() => {
    dispatch(obtenerParqueaderos());
  }, []);

  if (cargando) return <p>Cargando parqueaderos...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Georgia" }}>
      <h1 style={{ color: "#1a1a2e" }}>🅿️ Parking Bogotá</h1>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#1a1a2e", color: "white" }}>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Tipo</th>
            <th>Espacios Disponibles</th>
            <th>Tarifa/hora</th>
          </tr>
        </thead>
        <tbody>
          {parqueaderos.map((p, i) => (
            <tr key={p.id} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.direccion}</td>
              <td>{p.tipo}</td>
              <td>{p.espaciosDisponibles} / {p.espaciosTotales}</td>
              <td>${p.tarifa.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaParqueaderos;
