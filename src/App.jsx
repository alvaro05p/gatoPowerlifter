import './App.css'
import { Ejercicio } from './Ejercicio'

function App() {

  function borrarLocalStorage(){
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold mb-3">Gato Powerlifter</h1>
      <img src="images/gatoSBD.png" alt="Gato con ropa de deporte" className="fotoMain"/>
      <h2 className="h4 mb-4">
        Gestiona tus entrenes de forma gratuita
      </h2>
      
      
      <div className="row g-4">
        <div className="col-md-4">
          <Ejercicio nombre="Peso muerto" id="deadlift" />
        </div>
        <div className="col-md-4">
          <Ejercicio nombre="Press Banca" id="bench"/>
        </div>
        <div className="col-md-4">
          <Ejercicio nombre="Sentadilla" id="squat"/>
        </div>
      </div>
      <button className="btn btn-danger" onClick={borrarLocalStorage}>Borrar todo</button>
    </div>
  )
}

export default App
