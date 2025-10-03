import { useState } from "react";
import { useEffect } from "react";
import './App.css'

export function Ejercicio({ nombre, id }) {

  const [iniciado, setIniciado] = useState(() => {
    const guardado = localStorage.getItem(`${nombre}-iniciado`)
    return guardado ? JSON.parse(guardado) : false;
  });

  const [series, setSeries] = useState(() => {
    const guardado = localStorage.getItem(`${nombre}-series`)
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem(`${nombre}-iniciado`, JSON.stringify(iniciado));
  }, [iniciado]);

  useEffect(() => {
    localStorage.setItem(`${nombre}-series`, JSON.stringify(series));
  }, [series]);

  // Añadir nueva fila
  function addRow() {
    setSeries(prev => [...prev, { peso: "", repes: "", rir: "" }]);
  }

  // Actualizar un campo de la serie
  function handleChange(index, field, value) {
    setSeries(prev =>
      prev.map((serie, i) =>
        i === index ? { ...serie, [field]: value } : serie
      )
    );
  }

  // Manejo de Enter para moverse al siguiente input
  function handleKeyDown(e, nextId) {
    if (e.key === "Enter") {
      e.preventDefault();
      const next = document.getElementById(nextId);
      if (next) next.focus();
    }
  }

  return (
    <div className="card bg-dark text-light shadow-sm p-4 mb-4">
      <h2 className="h4 mb-3">{nombre}</h2>
      {iniciado ? (
        <>
          <p className="registros-de">Registros de {nombre}</p>
          <button
            className="btn btn-danger btn-sm mb-3"
            onClick={addRow}
          >
            Añadir serie
          </button>

          {series.length > 0 && (
            <div className="tablaSeries mt-3">
              <table className="table table-dark table-striped table-bordered text-center align-middle">
                <thead className="table-danger">
                  <tr>
                    <th>Peso</th>
                    <th>Repes</th>
                    <th>@</th>
                  </tr>
                </thead>
                <tbody>
                  {series.map((serie, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={serie.peso}
                          onChange={e => handleChange(index, "peso", e.target.value)}
                          onKeyDown={e => handleKeyDown(e, `repes-${index}`)}
                          autoFocus={serie.peso === "" && index === series.length - 1}
                        />
                      </td>
                      <td>
                        <input
                          id={`repes-${index}`}
                          type="number"
                          className="form-control"
                          value={serie.repes}
                          onChange={e => handleChange(index, "repes", e.target.value)}
                          onKeyDown={e => handleKeyDown(e, `rir-${index}`)}
                        />
                      </td>
                      <td>
                        <input
                          id={`rir-${index}`}
                          type="number"
                          className="form-control"
                          value={serie.rir}
                          onChange={e => handleChange(index, "rir", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <>
          <p>Aún no has empezado con {nombre}</p>
          <img src={`images/${id}.png`} alt="Imagen del ejercicio" />
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              setIniciado(true);
            }}
          >
            Empezar
          </button>
        </>
      )}
    </div>
  );
}

export default Ejercicio;
