import React from 'react';

function ModalTest({ show, onClose, children }) {
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
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Banca</label>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Sentadilla</label>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Peso Muerto</label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
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
