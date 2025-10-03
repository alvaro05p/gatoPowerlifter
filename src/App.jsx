import "./App.css";
import { useState } from "react";
import EntrenoHoy from "./EntrenoHoy";
import { generarPlan } from "./planLogic";

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );
  const [showEntreno, setShowEntreno] = useState(false);

  const plan = userData
    ? generarPlan(userData.dias, userData.ejercicios, userData.rmValues)
    : null;

  return (
    <div className="container text-center py-5">
      <h1>Gato Powerlifter</h1>

      {userData ? (
        <>
          <button
            className="btn btn-danger"
            onClick={() => setShowEntreno(true)}
          >
            Empezar entrenamiento
          </button>

          <EntrenoHoy
            show={showEntreno}
            onClose={() => setShowEntreno(false)}
            planDia={plan[0]} // de momento siempre Día 1
          />
        </>
      ) : (
        <p>No hay datos guardados todavía. Haz el test inicial.</p>
      )}
    </div>
  );
}

export default App;
