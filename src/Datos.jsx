import React from "react";

function Datos({ ejercicios, dias, rmValues }) {
  return (
    <div className="container mt-3">
      <h2>Resumen de tus datos</h2>
      <p><strong>Días de entrenamiento:</strong> {dias}</p>

      <h4>Ejercicios seleccionados:</h4>
      <ul>
        {ejercicios.map((ej) => (
          <li key={ej}>
            {ej.charAt(0).toUpperCase() + ej.slice(1)} → {rmValues[ej]} kg RM
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Datos;
