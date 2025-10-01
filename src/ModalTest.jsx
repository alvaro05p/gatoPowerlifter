import React from 'react';
import { useState } from 'react';

function ModalTest({ show, onClose, children }) {

  const [selected, setSelected] = useState({
    banca: false,
    sentadilla: false,
    pesoMuerto: false,
  });

  const handleSubmit = () => {
    // Obtenemos las claves cuyo valor es true
    const seleccionados = Object.keys(selected).filter(key => selected[key]);

    if (seleccionados.length > 0) {
      alert("Ejercicios seleccionados: " + seleccionados.join(", "));
    } else {
      alert("No seleccionaste ningún ejercicio.");
    }
  };

  console.log(selected.banca)
  if (!show) return null; // No renderiza nada si show es false

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="modalLabel" aria-modal="true" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabel">Título del Modal</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <form action="" className="sbd-select">
              <legend>Que basicos haces?</legend>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"  checked={selected.banca}   // <- para que React controle el valor
                  onChange={() => setSelected(prev => ({ ...prev, banca: !prev.banca }))}/>
                <label className="form-check-label" for="exampleCheck1">Banca</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={selected.sentadilla}   // <- para que React controle el valor
                  onChange={() => setSelected(prev => ({ ...prev, sentadilla: !prev.sentadilla }))}/>
                <label className="form-check-label" for="exampleCheck2">Sentadilla</label>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck3" checked={selected.pesoMuerto}   // <- para que React controle el valor
                  onChange={() => setSelected(prev => ({ ...prev, pesoMuerto: !prev.pesoMuerto }))}/>
                <label className="form-check-label" for="exampleCheck3">Peso Muerto</label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSubmit}
            >
              Siguiente
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
      {/* Fondo oscuro */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}

export default ModalTest;
