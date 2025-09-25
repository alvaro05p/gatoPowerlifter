import { useState } from "react";
import './App.css'

export function Ejercicio({ nombre }) {
  const [iniciado, setIniciado] = useState(false);
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const series = [
    {peso: 20, repes: 10, rir: 3},
    {peso: 20, repes: 10, rir: 2},
    {peso: 20, repes: 10, rir: 3}
  ]

  function showTable(){
    return (
      <div class="tablaSeries">
        <table border="1">
          <thead>
            <tr>
              <th>Peso</th>
              <th>Repes</th>
              <th>@</th>
            </tr>
          </thead>
          <tbody>
            {series.map((serie, index) => (
              <tr key={index}>
                <td>{serie.peso}kg</td>
                <td>{serie.repes}</td>
                <td>@{serie.rir}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <>
      <h1>{nombre}</h1>
      {iniciado ? (
        <>
        <p>Registros de {nombre}</p>
        <button onClick={() => setMostrarTabla(true)}>Añadir</button>
        {mostrarTabla ? showTable() : null}
      
        </>
      ) : (
        <>
          <p>Aún no has empezado con {nombre}</p>
          <button onClick={() => setIniciado(true)}>Empezar</button>
        </>
      )}
    </>
  );
}

export default Ejercicio;
