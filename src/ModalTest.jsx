import React, { useEffect, useState } from 'react';

function ModalTest({ show, onClose, onFinish }) {
  const [dias, setDias] = useState("");
  const [selected, setSelected] = useState({
    banca: false,
    sentadilla: false,
    pesoMuerto: false,
  });
  const [step, setStep] = useState(1);
  const [rmValues, setRmValues] = useState({});

  const seleccionados = Object.keys(selected).filter((key) => selected[key]);

  const handleSubmit = () => {
    if (step === 1) {
      if (seleccionados.length === 0) {
        alert("No seleccionaste ningún ejercicio.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (dias === "") {
        alert("Selecciona cuántos días entrenas.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Último paso → mandamos los datos al padre
      onFinish({
        ejercicios: seleccionados,
        dias,
        rmValues,
      });
      onClose(); // Cierra el modal
    }
  };

  // Cuando entramos al paso 3, inicializamos los RM
  useEffect(() => {
    if (step === 3) {
      const inicial = {};
      seleccionados.forEach((ej) => {
        inicial[ej] = "";
      });
      setRmValues(inicial);
    }
  }, [step]);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: 'block' }}
      tabIndex="-1"
      aria-labelledby="modalLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">Título del Modal</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            {step === 1 && (
              <form className="sbd-select">
                <legend>¿Qué básicos haces?</legend>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={selected.banca}
                    onChange={() =>
                      setSelected((prev) => ({ ...prev, banca: !prev.banca }))
                    }
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Banca
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    checked={selected.sentadilla}
                    onChange={() =>
                      setSelected((prev) => ({
                        ...prev,
                        sentadilla: !prev.sentadilla,
                      }))
                    }
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Sentadilla
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck3"
                    checked={selected.pesoMuerto}
                    onChange={() =>
                      setSelected((prev) => ({
                        ...prev,
                        pesoMuerto: !prev.pesoMuerto,
                      }))
                    }
                  />
                  <label className="form-check-label" htmlFor="exampleCheck3">
                    Peso Muerto
                  </label>
                </div>
              </form>
            )}

            {step === 2 && (
              <div>
                <legend>Segunda pregunta</legend>
                <div className="mb-3">
                  <label htmlFor="dias" className="form-label">
                    ¿Cuántos días entrenas por semana?
                  </label>
                  <select
                    id="dias"
                    className="form-select"
                    value={dias}
                    onChange={(e) => setDias(e.target.value)}
                  >
                    <option value="">Selecciona...</option>
                    <option value="3">3 días</option>
                    <option value="4">4 días</option>
                    <option value="5">5 días</option>
                    <option value="6">6 días</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <form>
                <legend>¿Cuál es tu RM en cada ejercicio?</legend>
                {Object.keys(rmValues).map((ejercicio) => (
                  <div className="mb-3" key={ejercicio}>
                    <label className="form-label">
                      {ejercicio.charAt(0).toUpperCase() + ejercicio.slice(1)} (kg)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={rmValues[ejercicio]}
                      onChange={(e) =>
                        setRmValues({ ...rmValues, [ejercicio]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleSubmit}>
              {step < 3 ? "Siguiente" : "Finalizar"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}

export default ModalTest;
