import React from "react";

function EntrenoHoy({ show, onClose, planDia }) {
  if (!show || !planDia) return null;

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title">Entrenamiento - Día {planDia.dia}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <table className="table table-dark table-striped text-center">
              <thead className="table-danger">
                <tr>
                  <th>Ejercicio</th>
                  <th>Series</th>
                  <th>Repes</th>
                  <th>Peso</th>
                </tr>
              </thead>
              <tbody>
                {planDia.ejercicios.map((ex, i) => (
                  <tr key={i}>
                    <td>{ex.nombre}</td>
                    <td>{ex.series}</td>
                    <td>{ex.repes}</td>
                    <td>{ex.peso} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success">Finalizar Entreno</button>
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
}

export default EntrenoHoy;
